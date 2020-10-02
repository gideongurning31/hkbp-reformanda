import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminlinks, Links } from './admin.links';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {}

  links: Array<Links>;
  user: string;

  ngOnInit(): void {
    this.links = adminlinks;
    this.user = 'John Doe';
  }

  navigate(path: Array<string>) {
    this.router.navigate(path);
  }
}
