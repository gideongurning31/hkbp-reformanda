import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<div class="not-found"><h2>404 - LAMAN TIDAK DITEMUKAN,<br/>SILAKAN KEMBALI KE <a href="/">BERANDA</a></h2></div>',
  styles: ['.not-found { width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; }'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
