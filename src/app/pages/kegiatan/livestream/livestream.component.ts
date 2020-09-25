import { Component, OnInit, Input } from '@angular/core';
import { Kegiatan } from '../kegiatan.model';

@Component({
  selector: 'app-livestream',
  templateUrl: 'livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
})
export class LiveStreamComponent implements OnInit {
  constructor() {}

  @Input() liveStreamEvent: Kegiatan;

  ngOnInit(): void {}
}
