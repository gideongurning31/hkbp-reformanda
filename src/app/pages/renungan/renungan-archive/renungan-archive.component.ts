import { Component, OnInit, Input } from '@angular/core';
import { Renungan } from '../renungan.content';

@Component({
  selector: 'app-renungan-archive',
  template: 'Arsip Renungan',
  styles: [''],
})
export class RenunganArchiveComponent implements OnInit {
  constructor() {}

  @Input() listRenungan: Array<Renungan>;

  ngOnInit(): void {
    console.log(this.listRenungan);
  }
}
