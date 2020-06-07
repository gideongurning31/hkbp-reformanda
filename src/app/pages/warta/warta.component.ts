import { Component, OnInit } from '@angular/core';
import { LabelValue } from 'src/app/utils/label-value.model';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { months, years } from './warta.datepicker';

@Component({
  selector: 'app-warta',
  templateUrl: 'warta.component.html',
  styleUrls: ['./warta.component.scss'],
  animations: [animateFadeIn],
})
export class WartaComponent implements OnInit {
  showArchive: boolean;
  monthSelect: Array<LabelValue> = months;
  yearSelect: Array<number> = years;
  constructor() {}

  ngOnInit(): void {
    this.showArchive = false;
  }

  downloadRecent() {}
}
