import { Component, OnInit, Input } from '@angular/core';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { Renungan } from '../renungan.model';

@Component({
  selector: 'app-renungan-detail',
  templateUrl: 'renungan-detail.component.html',
  styleUrls: ['./renungan-detail.component.scss'],
  animations: [animateFadeIn],
})
export class RenunganDetailComponent implements OnInit {
  constructor() {}

  @Input() renunganDetail: Renungan;

  ngOnInit(): void {}
}
