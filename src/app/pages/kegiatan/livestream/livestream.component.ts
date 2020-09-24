import { Component, OnInit, Input } from '@angular/core';
import { LiveStream } from './livestream.model';

@Component({
  selector: 'app-livestream',
  templateUrl: 'livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
})
export class LiveStreamComponent implements OnInit {
  constructor() {}

  @Input() liveStreamEvent: LiveStream;

  ngOnInit(): void {}
}
