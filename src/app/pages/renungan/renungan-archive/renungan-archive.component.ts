import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Renungan } from '../renungan.content';

@Component({
  selector: 'app-renungan-archive',
  templateUrl: 'renungan-archive.component.html',
  styleUrls: ['./renungan-archive.component.scss'],
})
export class RenunganArchiveComponent implements OnInit {
  constructor() {}

  @Input() youtubeUrl?: string;
  @Input() listRenungan: Array<Renungan>;
  @Output() viewDetail: EventEmitter<Renungan> = new EventEmitter();

  ngOnInit(): void {}
}
