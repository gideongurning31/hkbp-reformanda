import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminRenunganFormData } from '../admin-renungan.component';

@Component({
  selector: 'app-admin-renungan-form',
  templateUrl: 'admin-renungan-form.component.html',
  styleUrls: ['../../admin-forms.component.scss'],
})
export class AdminRenunganFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AdminRenunganFormData) {}

  renunganForm: FormGroup;

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
  }

  submit() {
    console.log(this.renunganForm.value);
  }

  cancel() {}
}
