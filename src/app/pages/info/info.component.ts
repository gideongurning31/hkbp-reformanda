import { Component, OnInit } from '@angular/core';
import { history, info, Info } from './info.content';

@Component({
  selector: 'app-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss'],
})
export class InfoComponent implements OnInit {
  history: Array<string> = history;
  info: Array<Info> = info;
  constructor() {}

  ngOnInit(): void {}
}
