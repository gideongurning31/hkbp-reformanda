import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RenunganService } from '../../service/renungan.service';
import { Renungan } from './renungan.content';

@Component({
  selector: 'app-renungan',
  templateUrl: 'renungan.component.html',
  styleUrls: ['./renungan.component.scss'],
})
export class RenunganComponent implements OnInit {
  constructor(private renunganService: RenunganService) {}

  listRenungan: Array<Renungan>;
  detailRenungan: Renungan;

  ngOnInit(): void {
    this.getAllRenungan();
    if (this.listRenungan && this.listRenungan.length > 0) {
      this.detailRenungan = this.listRenungan[this.listRenungan.length - 1];
    }
  }

  getAllRenungan() {
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response) => {
        subscription.unsubscribe();
        console.log(response);
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
      });
  }

  viewDetail(r: Renungan) {
    this.detailRenungan = r;
  }
}
