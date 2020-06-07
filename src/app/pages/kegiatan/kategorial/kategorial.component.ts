import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { Kategorial, kategorial } from '../kategorial.member';

@Component({
  selector: 'app-kategorial',
  templateUrl: './kategorial.component.html',
  styleUrls: ['./kategorial.component.scss'],
  animations: [animateFadeIn]
})
export class KategorialComponent implements OnInit {
  kategorial: Array<Kategorial>;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.kategorial = kategorial;
  }

  navigate(path: Array<string>) {
    this.router.navigate(path);
  }
}
