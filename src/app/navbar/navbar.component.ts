import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuConfig, Menu } from './navbar.menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menu = menuConfig;
  }

  navigate(path: Array<string>) {
    this.router.navigate(path);
  }
}
