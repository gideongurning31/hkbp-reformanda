import { Component, OnInit, Input } from '@angular/core';
import { Renungan } from '../renungan.content';

@Component({
  selector: 'app-renungan-detail',
  templateUrl: 'renungan-detail.component.html',
  styleUrls: ['./renungan-detail.component.scss'],
})
export class RenunganDetailComponent implements OnInit {
  constructor() {}

  @Input() renunganDetail: Renungan;

  ngOnInit(): void {}
}
