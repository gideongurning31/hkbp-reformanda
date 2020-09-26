import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RenunganService } from 'src/app/service/renungan.service';
import { Renungan } from 'src/app/pages/renungan/renungan.model';

@Component({
  selector: 'app-admin-renungan',
  templateUrl: 'admin-renungan.component.html',
  styleUrls: ['../admin-forms.component.scss'],
})
export class AdminRenunganComponent implements OnInit {
  constructor(private renunganService: RenunganService) {}

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

  addData() {}

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
