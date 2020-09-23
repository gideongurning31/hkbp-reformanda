import { Component, OnInit } from '@angular/core';
import { RenunganService } from '../../service/renungan.service';
import { Renungan } from './renungan.content';

@Component({
  selector: 'app-renungan',
  template: '<div class="coming-soon"><h1>COMING SOON</h1></div>',
  styles: ['.coming-soon { width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; }'],
})
export class RenunganComponent implements OnInit {
  constructor(private renunganService: RenunganService) {}

  listRenungan: Array<Renungan>;

  ngOnInit(): void {
    this.getAllRenungan();
  }

  getAllRenungan() {
    this.listRenungan = this.renunganService.getAllRenungan();
  }
}
