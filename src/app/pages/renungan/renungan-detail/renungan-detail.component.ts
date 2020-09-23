import { Component, OnInit, Input } from '@angular/core';
import { Renungan } from '../renungan.content';

@Component({
  selector: 'app-renungan-detail',
  templateUrl: 'renungan-detail.component.html',
  styles: [''],
})
export class RenunganDetailComponent implements OnInit {
  constructor() {}

  @Input() renunganDetail: Renungan;

  ngOnInit(): void {}
}
