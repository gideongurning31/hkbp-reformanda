import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminRenunganFormData } from '../admin-renungan.component';

@Component({
  selector: 'app-admin-renungan-form',
  templateUrl: 'admin-renungan-form.component.html',
  styleUrls: ['../../admin-forms.component.scss'],
})
export class AdminRenunganFormComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AdminRenunganFormData) {}

  ngOnInit(): void {}

  submit() {}

  cancel() {}

}
