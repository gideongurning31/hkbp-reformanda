import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RenunganService } from '../../service/renungan.service';
import { Renungan } from './renungan.model';

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
  }

  getAllRenungan() {
    this.listRenungan = [];
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response: Array<Renungan>) => {
        subscription.unsubscribe();
        this.listRenungan = response;
        this.viewDetail(response[response.length - 1]);
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
      });
  }

  viewDetail(r: Renungan) {
    this.detailRenungan = r;
  }
}
