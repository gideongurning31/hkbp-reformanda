import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { Renungan } from '../renungan.model';

@Component({
  selector: 'app-renungan-archive',
  templateUrl: 'renungan-archive.component.html',
  styleUrls: ['./renungan-archive.component.scss'],
  animations: [animateFadeIn],
})
export class RenunganArchiveComponent implements OnInit {
  constructor() {}

  @Input() youtubeUrl?: string;
  @Input() listRenungan: Array<Renungan>;
  @Output() viewDetail: EventEmitter<Renungan> = new EventEmitter();

  ngOnInit(): void {}
}
