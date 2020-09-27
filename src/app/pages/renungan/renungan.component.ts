import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { RenunganService } from '../../service/renungan.service';
import { Renungan } from './renungan.model';

@Component({
  selector: 'app-renungan',
  templateUrl: 'renungan.component.html',
  styleUrls: ['./renungan.component.scss'],
})
export class RenunganComponent implements OnInit {

  constructor(private spinner: SpinnerCloakService, private renunganService: RenunganService) {}

  listRenungan: Array<Renungan>;
  detailRenungan: Renungan;

  ngOnInit(): void {
    this.getAllRenungan();
  }

  getAllRenungan() {
    this.spinner.setSpinner(true);
    this.listRenungan = [];
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response: Array<Renungan>) => {
        subscription.unsubscribe();
        this.listRenungan = response;
        this.viewDetail(response[0]);
        this.spinner.setSpinner(false);
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }

  viewDetail(r: Renungan) {
    this.detailRenungan = r;
  }
}
