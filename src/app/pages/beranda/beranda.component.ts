import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-beranda',
  templateUrl: 'beranda.component.html',
  styleUrls: ['beranda.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(1500)]),
    ])
  ],
})
export class BerandaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
