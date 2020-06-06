import { Component, OnInit } from '@angular/core';
import { menuConfig, Menu } from './navbar.menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[];
  constructor() {}

  ngOnInit(): void {
    this.menu = menuConfig;
  }
}
