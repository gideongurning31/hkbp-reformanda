import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { Kategorial } from '../kategorial.model';
import { KategorialService } from 'src/app/service/kategorial-service';

@Component({
  selector: 'app-kategorial',
  templateUrl: './kategorial.component.html',
  styleUrls: ['./kategorial.component.scss'],
  animations: [animateFadeIn],
})
export class KategorialComponent implements OnInit {
  constructor(private router: Router, private kategorialService: KategorialService) {}
  @Output() viewDetail: EventEmitter<string> = new EventEmitter();
  kategorial: Array<Kategorial>;

  ngOnInit(): void {
    this.getAllKategorial();
  }

  private getAllKategorial() {
    this.kategorial = [];
    const subscription: Subscription = this.kategorialService.getAllKategorial()
      .subscribe((response: Array<Kategorial>) => {
        subscription.unsubscribe();
        this.kategorial = response;
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
      });
  }

  navigate(kategorialId: string) {
    this.router.navigate(['kegiatan', 'kategorial', kategorialId]);
    this.viewDetail.emit(kategorialId);
  }
}
