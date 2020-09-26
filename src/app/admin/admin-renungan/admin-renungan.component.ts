import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RenunganService } from 'src/app/service/renungan.service';
import { Renungan } from 'src/app/pages/renungan/renungan.model';
import { AdminRenunganFormComponent } from './admin-renungan-form/admin-renungan-form.component';

@Component({
  selector: 'app-admin-renungan',
  templateUrl: 'admin-renungan.component.html',
  styleUrls: ['../admin-forms.component.scss'],
})
export class AdminRenunganComponent implements OnInit {
  constructor(private renunganService: RenunganService, private dialog: MatDialog) {}

  dataTable: Array<Renungan>;

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.dataTable = [];
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response: Array<Renungan>) => {
        subscription.unsubscribe();
        this.dataTable = response;
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
      });
  }

  addData() {
    const dialogRef = this.dialog.open(AdminRenunganFormComponent, { data: { title: 'Tambah Renungan Harian Baru' }});
    dialogRef.componentInstance.onSuccessSubmit.subscribe((success?: boolean) => {
      if (success) {
        this.getDataTable();
      }
    });
  }

  viewData(id: string) {
    console.log(`View data ${id}`);
  }

  editData(id: string) {
    console.log(`Edit data ${id}`);
  }

  deleteData(id: string) {
    console.log(`Delete data ${id}`);
  }
}

export interface AdminRenunganFormData {
  title: string;
  content?: Renungan;
}
