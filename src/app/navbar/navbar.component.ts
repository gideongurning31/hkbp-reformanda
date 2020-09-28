import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuConfig, Menu } from './navbar.menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  menu: Array<Menu>;
  mobileNav: boolean;

  ngOnInit(): void {
    this.menu = menuConfig;
    this.mobileNav = false;
  }

  navigate(path: Array<string>) {
    this.router.navigate(path);
  }

  toggleNav() {
    this.mobileNav = !this.mobileNav;
  }

}
