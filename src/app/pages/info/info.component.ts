import { Component, OnInit } from '@angular/core';
import { history, info, Info } from './info.content';
import { animateFadeLeft, animateFadeRight } from 'src/app/utils/common-animation';

@Component({
  selector: 'app-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss'],
  animations: [animateFadeLeft, animateFadeRight],
})
export class InfoComponent implements OnInit {
  history: Array<string> = history;
  info: Array<Info> = info;
  constructor() {}

  ngOnInit(): void {}
}
