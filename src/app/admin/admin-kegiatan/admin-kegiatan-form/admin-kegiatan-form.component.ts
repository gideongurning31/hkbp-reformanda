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
    { label: 'Livestream', value: 'Livestream', description: 'contoh: Kebaktian yang di-broadcast live melalui media streaming' },
    { label: 'Podcast', value: 'Podcast', description: 'contoh: Video Reformanda Podcast' },
    { label: 'Converence', value: 'Converence', description: 'contoh: Sermon/PA via konferensi daring' },
    { label: 'Kegiatan lainnya', value: 'Kegiatan lainnya', description: 'Kegiatan selain pilihan-pilihan di atas' },
  ];

  ngOnInit(): void {
    this.initForm();
    this.setFormValue(this.data.content);
    if (this.data.action === ActionType.DELETE) this.kegiatanForm.disable();
  }

  initForm() {
    this.kegiatanForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      start: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
    });

    this.formErrors = {
      title: null,
      type: null,
      date: null,
      start: null,
      end: null,
      invalidRange: null
    };
  }

  setFormValue(data: Kegiatan) {
    if (!data) return;
    ['id', 'title', 'type', 'url'].forEach((key) => this.kegiatanForm.controls[key].setValue(data[key]));
    this.kegiatanForm.controls.date.setValue(moment.unix(data.startDate / 1000).format('YYYY-MM-DD'));
    this.kegiatanForm.controls.start.setValue(moment.unix(data.startDate / 1000).format('HH:mm'));
    this.kegiatanForm.controls.end.setValue(moment.unix(data.endDate / 1000).format('HH:mm'));
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
      type: this.kegiatanForm.controls.type.value,
      url: this.kegiatanForm.controls.url.value,
      startDate: this.timePayload(this.kegiatanForm.controls.start.value),
      endDate: this.timePayload(this.kegiatanForm.controls.end.value),
    };
  }

  private timePayload(time: string = '00:00') {
    const date = `${this.kegiatanForm.controls.date.value} ${time}:00`;
    return moment(date, 'YYYY-MM-DD HH:mm:ss').unix() * 1000;
  }

  cancel() {
    this.dialogRef.close();
    this.initForm();
  }

  private validateForm(): boolean {
    const values = this.kegiatanForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (key === 'invalidRange') return;
      if (!values[key] || values[key].trim() === '') this.formErrors[key] = ValidationErrors[key];
    });

    // tslint:disable-next-line: no-string-literal
    if (this.invalidRange(values)) this.formErrors['invalidRange'] = ValidationErrors.invalidRange;
    return this.noValidationErrors();
  }

  private invalidRange(values: any): boolean {
    if (!values.start || !values.end) return false;
    return moment(values.end, 'HH:mm').isSameOrBefore(moment(values.start, 'HH:mm'));
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
  date = 'Tanggal kegiatan harus ditentukan.',
  start = 'Waktu berakhir harus ditentukan.',
  end = 'Waktu berakhir harus ditentukan.',
  invalidRange = 'Waktu berakhir harus lebih besar daripada waktu mulai.',
}
