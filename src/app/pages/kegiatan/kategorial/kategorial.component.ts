import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kategorial, kategorial } from '../kategorial.member';

@Component({
  selector: 'app-kategorial',
  templateUrl: './kategorial.component.html',
  styleUrls: ['./kategorial.component.scss'],
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
