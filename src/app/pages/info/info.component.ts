import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <p>
      info works!
    </p>
  `,
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
