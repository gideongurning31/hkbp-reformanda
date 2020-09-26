import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/utils/components/alert-dialog.component';
import { AdminRenunganFormData } from '../admin-renungan.component';
import { RenunganService } from 'src/app/service/renungan.service';
import { Renungan } from 'src/app/pages/renungan/renungan.model';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-renungan-form',
  templateUrl: 'admin-renungan-form.component.html',
  styleUrls: ['../../admin-forms.component.scss'],
})
export class AdminRenunganFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AdminRenunganFormData,
    public dialogRef: MatDialogRef<AdminRenunganFormComponent>,
    private dialog: MatDialog,
    private renunganService: RenunganService) {}

  formTitle: string = FormHeader[this.data.action];
  renunganForm: FormGroup;
  formErrors: {};
  onSuccessSubmit: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.initForm();
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

  submit() {
    if (this.validateForm()) {
      const subscription: Subscription = this.renunganService
        .createNew(this.generatePayload())
        .subscribe((response: Renungan) => {
          subscription.unsubscribe();
          if (response && response.id) {
            this.dialogRef.close();
            this.onSuccessSubmit.emit(true);
          } else {
            console.error(response);
            this.alertDialog('Something went wrong.');
          }
        }, (error) => this.onErrorResponse(subscription, error));
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
    let errors = 0;
    const values = this.renunganForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (values[key] === null || values[key].trim() === '') {
        this.formErrors[key] = ValidationErrors[key];
        errors++;
      }
    });
    return errors === 0;
  }

  releaseFormError(key: string): void {
    this.formErrors[key] = null;
  }

  private onErrorResponse(subscription: Subscription, e: any) {
    subscription.unsubscribe();
    let definedError = 'An unexpected error occurred.';
    if (e.error && typeof e.error === typeof 'string') {
      definedError = e.error;
    } else if (!e.status || e.status === 0) {
      definedError = 'Terjadi kesalahan internal pada server.';
    }
    this.alertDialog(definedError);
  }

  private alertDialog(message: string) {
    this.dialog.open(AlertDialogComponent, { data: message });
  }
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
