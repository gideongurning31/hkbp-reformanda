import { Component, OnInit } from '@angular/core';
import { Kategorial, kategorial } from './kategorial.member';

@Component({
  selector: 'app-kegiatan',
  templateUrl: 'kegiatan.component.html',
  styleUrls: ['./kegiatan.component.scss'],
})
export class KegiatanComponent implements OnInit {
  kategorial: Array<Kategorial>;
  constructor() {}

  ngOnInit(): void {
    this.kategorial = kategorial;
  }
}
