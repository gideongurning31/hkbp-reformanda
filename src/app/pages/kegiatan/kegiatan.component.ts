import { Component, OnInit } from '@angular/core';
import { animateFadeDown } from 'src/app/utils/common-animation';

@Component({
  selector: 'app-kegiatan',
  templateUrl: 'kegiatan.component.html',
  styleUrls: ['./kegiatan.component.scss'],
  animations: [animateFadeDown],
})
export class KegiatanComponent implements OnInit {
  constructor() {}

  liveStream: string;

  ngOnInit(): void {
    this.cekLiveStream();
  }

  cekLiveStream() {
    this.liveStream = null;
  }
}
