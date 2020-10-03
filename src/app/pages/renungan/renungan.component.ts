import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { PagingHelper, ApiPagingResponse, Paging } from 'src/app/utils/paging-helper.service';
import { RenunganService } from '../../service/renungan.service';
import { Renungan } from './renungan.model';

@Component({
  selector: 'app-renungan',
  templateUrl: 'renungan.component.html',
  styleUrls: ['./renungan.component.scss'],
})
export class RenunganComponent implements OnInit {

  constructor(private spinner: SpinnerCloakService, private pagingHelper: PagingHelper, private renunganService: RenunganService) {}

  listRenungan: Array<Renungan>;
  detailRenungan: Renungan;
  paging: Paging;

  ngOnInit(): void {
    this.getAllRenungan();
  }

  getAllRenungan() {
    this.spinner.setSpinner(true);
    this.listRenungan = [];
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response: ApiPagingResponse) => {
        subscription.unsubscribe();
        this.paging = this.pagingHelper.getPaging(response.paging);
        this.listRenungan = response.data;
        this.viewDetail(this.listRenungan[0]);
        this.spinner.setSpinner(false);
      }, error => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }

  viewDetail(r: Renungan) {
    this.detailRenungan = r;
  }
}
