import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { Links, links } from './beranda.links';

@Component({
  selector: 'app-beranda',
  templateUrl: 'beranda.component.html',
  styleUrls: ['beranda.component.scss'],
  animations: [
    trigger('fading', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(1500)]),
    ]),
  ],
})
export class BerandaComponent implements OnInit {
  count = 0;
  links: Links[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.links = links;
    this.addCount(7000);
    this.addCount(8500);
  }

  addCount(interval) {
    setTimeout(() => (this.count += 1), interval);
  }

  navigate(path: Array<string>) {
    this.router.navigate(path);
  }
}
