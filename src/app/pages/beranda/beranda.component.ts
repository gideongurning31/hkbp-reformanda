import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Links } from 'src/app/admin/admin.links';
import { links } from './beranda.links';
import { animateFadeIn } from 'src/app/utils/common-animation';

@Component({
  selector: 'app-beranda',
  templateUrl: 'beranda.component.html',
  styleUrls: ['beranda.component.scss'],
  animations: [animateFadeIn],
})
export class BerandaComponent implements OnInit {

  constructor(private router: Router) {}

  count = 0;
  links: Array<Links>;

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
