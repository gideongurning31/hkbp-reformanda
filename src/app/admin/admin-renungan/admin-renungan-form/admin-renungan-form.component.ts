import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseFormComponent } from 'src/app/utils/components/base-form.component';
import { RenunganService } from 'src/app/service/renungan.service';
import { Renungan } from 'src/app/pages/renungan/renungan.model';
import { ActionType } from 'src/app/utils/common.enum';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-renungan-form',
  templateUrl: 'admin-renungan-form.component.html',
  styleUrls: ['../../admin-forms.component.scss'],
})
export class AdminRenunganFormComponent extends BaseFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AdminRenunganFormData,
    dialog: MatDialog,
    private dialogRef: MatDialogRef<AdminRenunganFormComponent>,
    private renunganService: RenunganService) {
      super(dialog);
  }

  formTitle: string = FormHeader[this.data.action];
  renunganForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
    if (this.data.action !== ActionType.CREATE) this.setFormValue();
  }

  initForm() {
    this.renunganForm = new FormGroup({
      id: new FormControl(null),
      tanggal: new FormControl(null, Validators.required),
      natsAyat: new FormControl(null, Validators.required),
      natsKalimat: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      refleksi: new FormControl(null, Validators.required),
      penulis: new FormControl(null),
      youtubeUrl: new FormControl(null),
    });

    this.formErrors = {
      tanggal: null,
      natsAyat: null,
      natsKalimat: null,
      content: null,
      refleksi: null,
    };
  }

  setFormValue() {
    Object.keys(this.data.content).forEach((key) => {
      let value = this.data.content[key];
      if (key === 'tanggal') value = moment.unix(value / 1000).format('YYYY-MM-DD');
      else if (key === 'content') value = value.join('|');

      if (this.data.content[key]) this.renunganForm.controls[key].setValue(value);
    });
    if (this.data.action === ActionType.DELETE) this.renunganForm.disable();
  }

  submit() {
    if (this.validateForm()) {
      const subscription: Subscription = this.renunganService
        .submit(this.data.action, this.generatePayload())
        .subscribe(response => this.okResponse(subscription, response), error => this.onErrorResponse(subscription, error));
    }
  }

  private generatePayload(): Renungan {
    return {
      id: this.renunganForm.controls.id.value,
      tanggal: moment(this.renunganForm.controls.tanggal.value, 'YYYY-MM-DD').unix() * 1000,
      natsAyat: this.renunganForm.controls.natsAyat.value,
      natsKalimat: this.renunganForm.controls.natsKalimat.value,
      content: this.renunganForm.controls.content.value.split('|'),
      refleksi: this.renunganForm.controls.refleksi.value,
      penulis: this.renunganForm.controls.penulis.value,
      youtubeUrl: this.renunganForm.controls.youtubeUrl.value,
    };
  }

  cancel() {
    this.dialogRef.close();
    this.initForm();
  }

  private validateForm(): boolean {
    const values = this.renunganForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (values[key] === null || values[key].trim() === '') this.formErrors[key] = ValidationErrors[key];
    });
    return this.noValidationErrors();
  }
}

interface AdminRenunganFormData {
  action: ActionType;
  content?: Renungan;
}

enum FormHeader {
  CREATE = 'Tambah Renungan Harian Baru',
  UPDATE = 'Ubah data Renungan Harian',
  DELETE = 'Apakah Anda yakin akan menghapus Renungan ini?'
}

enum ValidationErrors {
  tanggal = 'Tanggal renungan harus diisi.',
  natsAyat = 'Ayat nats harus diisi.',
  natsKalimat = 'Kalimat nats harus diisi.',
  content = 'Konten renungan harus diisi.',
  refleksi = 'Refleksi renungan harus diisi.'
}
