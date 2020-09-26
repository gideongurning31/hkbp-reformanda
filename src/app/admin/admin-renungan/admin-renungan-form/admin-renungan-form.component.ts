import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RenunganService } from 'src/app/service/renungan.service';
import { AdminRenunganFormData } from '../admin-renungan.component';

@Component({
  selector: 'app-admin-renungan-form',
  templateUrl: 'admin-renungan-form.component.html',
  styleUrls: ['../../admin-forms.component.scss'],
})
export class AdminRenunganFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AdminRenunganFormData, private renunganService: RenunganService) {}

  renunganForm: FormGroup;
  formErrors: {};

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
      console.log(this.renunganForm.value);
    }
  }

  cancel() {}

  private validateForm(): boolean {
    let errors = 0;
    const values = this.renunganForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (values[key] === null || values[key].trim() === '') {
        this.formErrors[key] = this.appendFormError(key);
        errors++;
      }
    });
    return errors === 0;
  }

  releaseFormError(key: string): void {
    this.formErrors[key] = null;
  }

  private appendFormError(field: string): string {
    switch (field) {
      case 'tanggal': return 'Tanggal renungan harus diisi.';
      case 'natsAyat': return 'Ayat nats harus diisi.';
      case 'natsKalimat': return 'Kalimat nats harus diisi.';
      case 'content': return 'Konten renungan harus diisi.';
      case 'refleksi': return 'Refleksi renungan harus diisi.';
    }
  }

}
