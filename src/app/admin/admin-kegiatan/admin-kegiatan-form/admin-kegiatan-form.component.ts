import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseFormComponent } from 'src/app/utils/components/base-form.component';
import { KegiatanService } from 'src/app/service/kegiatan.service';
import { Kegiatan, JenisKegiatan } from 'src/app/pages/kegiatan/kegiatan.model';
import { ActionType } from 'src/app/utils/common.enum';
import { LabelValueDesc } from 'src/app/utils/label-value.model';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-kegiatan-form',
  templateUrl: 'admin-kegiatan-form.component.html',
  styleUrls: ['../../admin-forms.component.scss'],
})
export class AdminKegiatanFormComponent extends BaseFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AdminKegiatanFormData,
    dialog: MatDialog,
    private dialogRef: MatDialogRef<AdminKegiatanFormComponent>,
    private kegiatanService: KegiatanService) {
      super(dialog);
  }

  formTitle: string = FormHeader[this.data.action];
  kegiatanForm: FormGroup;
  jenisKegiatan: Array<LabelValueDesc> = [
    { label: 'Livestream', value: 'LIVESTREAM', description: 'contoh: Kebaktian yang di-broadcast live melalui media streaming' },
    { label: 'Podcast', value: 'PODCAST', description: 'contoh: Video Reformanda Podcast' },
    { label: 'Converence', value: 'CONVERENCE', description: 'contoh: Sermon/PA via konferensi daring' },
    { label: 'Kegiatan lainnya', value: 'OTHERS', description: 'Kegiatan selain pilihan-pilihan di atas' },
  ];

  ngOnInit(): void {
    this.initForm();
    if (this.data.action !== ActionType.CREATE) this.setFormValue();
  }

  initForm() {
    this.kegiatanForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    });

    this.formErrors = {
      title: null,
      type: null,
      startDate: null,
      endDate: null,
    };
  }

  setFormValue() {
    Object.keys(this.data.content).forEach(key => {
      let value = this.data.content[key];
      if (key === 'startDate' || key === 'endDate') value = moment.unix(value / 1000).format('YYYY-MM-DD');
      if (this.data.content[key]) this.kegiatanForm.controls[key].setValue(value);
    });
    if (this.data.action === ActionType.DELETE) this.kegiatanForm.disable();
  }

  submit() {
    if (this.validateForm()) {
      const subscription: Subscription = this.kegiatanService
        .submit(this.data.action, this.generatePayload())
        .subscribe(response => this.okResponse(subscription, response), error => this.onErrorResponse(subscription, error));
    }
  }

  private generatePayload(): Kegiatan {
    return {
      id: this.kegiatanForm.controls.id.value,
      title: this.kegiatanForm.controls.title.value,
      type: JenisKegiatan[this.kegiatanForm.controls.type.value],
      url: this.kegiatanForm.controls.url.value,
      startDate: moment(this.kegiatanForm.controls.startDate.value, 'YYYY-MM-DD').unix() * 1000,
      endDate: moment(this.kegiatanForm.controls.endDate.value, 'YYYY-MM-DD').unix() * 1000,
    };
  }

  cancel() {
    this.dialogRef.close();
    this.initForm();
  }

  private validateForm(): boolean {
    let errors = 0;
    const values = this.kegiatanForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (values[key] === null || values[key].trim() === '') {
        this.formErrors[key] = ValidationErrors[key];
        errors++;
      }
    });
    return errors === 0;
  }
}

interface AdminKegiatanFormData {
  action: ActionType;
  content?: Kegiatan;
}

enum FormHeader {
  CREATE = 'Daftarkan Kegiatan Baru',
  UPDATE = 'Ubah Data Kegiatan',
  DELETE = 'Apakah Anda yakin akan menghapus data ini?',
}

enum ValidationErrors {
  title = 'Nama/judul kegiatan harus diisi.',
  type = 'Jenis kegiatan harus dipilih.',
  startDate = 'Tanggal mulai harus ditentukan.',
  endDate = 'Tanggal berakhir harus ditentukan.',
}
