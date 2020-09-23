import { Component, OnInit, Input } from '@angular/core';
import { Renungan } from '../renungan.content';

@Component({
  selector: 'app-renungan-detail',
  template: 'Konten Renungan',
  styles: [''],
})
export class RenunganDetailComponent implements OnInit {
  constructor() {}

  @Input() renunganDetail: Renungan;

  ngOnInit(): void {
    console.log(this.renunganDetail);
  }
}
