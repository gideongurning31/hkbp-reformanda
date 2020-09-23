import { Component, OnInit } from '@angular/core';
import { RenunganService } from '../../service/renungan.service';
import { Renungan } from './renungan.content';

@Component({
  selector: 'app-renungan',
  templateUrl: 'renungan.component.html',
  styles: [''],
})
export class RenunganComponent implements OnInit {
  constructor(private renunganService: RenunganService) {}

  listRenungan: Array<Renungan>;
  detailRenungan: Renungan;

  ngOnInit(): void {
    this.getAllRenungan();
    this.detailRenungan = this.listRenungan[this.listRenungan.length - 1];
  }

  getAllRenungan() {
    this.listRenungan = this.renunganService.getAllRenungan();
  }

  viewDetail(r: Renungan) {
    this.detailRenungan = r;
  }
}
