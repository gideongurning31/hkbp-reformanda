import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kegiatan',
  template: '<div class="coming-soon"><h1>COMING SOON</h1></div>',
  styles: ['.coming-soon { width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; }'],
})
export class KegiatanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
