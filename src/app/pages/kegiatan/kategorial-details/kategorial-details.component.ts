import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { animateFadeDown } from 'src/app/utils/common-animation';
import { kategorial } from '../kategorial.member';

@Component({
  selector: 'app-kategorial-details',
  templateUrl: 'kategorial-details.html',
  styleUrls: ['./kategorial-details.scss'],
  animations: [animateFadeDown]
})
export class KategorialDetailsComponent implements OnInit {
  title: string;
  deskripsi: Array<string>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = null;
    this.deskripsi = null;
    this.route.paramMap.subscribe((p: Params) => this.appendDeskripsi(p.params.id));
  }

  appendDeskripsi(id: string) {
    kategorial.forEach((k) => {
      if (k.id === id) {
        this.title = k.nama;
        this.deskripsi = k.deskripsi;
      }
    });
  }
}
