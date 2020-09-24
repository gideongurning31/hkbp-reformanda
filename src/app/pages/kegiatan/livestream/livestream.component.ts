import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: 'livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
})
export class LiveStreamComponent implements OnInit {
  constructor() {}

  @Input() liveStreamUrl: string;

  ngOnInit(): void {}
}
