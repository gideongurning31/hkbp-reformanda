import { Component, OnInit } from '@angular/core';
import { animateFadeDown } from 'src/app/utils/common-animation';
import { Kegiatan, JenisKegiatan } from './kegiatan.model';

@Component({
  selector: 'app-kegiatan',
  templateUrl: 'kegiatan.component.html',
  styleUrls: ['./kegiatan.component.scss'],
  animations: [animateFadeDown],
})
export class KegiatanComponent implements OnInit {
  constructor() {}

  liveStream: Kegiatan;

  ngOnInit(): void {
    this.cekLiveStream();
  }

  cekLiveStream() {
    this.liveStream = {
      id: '1',
      title: 'Kebaktian Minggu',
      url: 'https://www.youtube.com/watch?v=2R8l8ZI12vE',
      type: JenisKegiatan.LIVESTREAM,
      startDate: '2020/09/27',
      endDate: '2020/09/28',
    };
  }
}
