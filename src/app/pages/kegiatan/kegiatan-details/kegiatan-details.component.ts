import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kegiatan-details',
  template: '<div class="coming-soon"><h1>{{ kategorialId }}</h1></div>',
  styles: ['.coming-soon { width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; }'],
})
export class KegiatanDetailsComponent implements OnInit {
  kategorialId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.kategorialId = this.route.snapshot.paramMap.get('id').toUpperCase();
  }
}
