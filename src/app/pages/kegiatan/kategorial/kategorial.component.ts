import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { KategorialService } from 'src/app/service/kategorial-service';
import { Kategorial } from '../kategorial.model';

@Component({
  selector: 'app-kategorial',
  templateUrl: './kategorial.component.html',
  styleUrls: ['./kategorial.component.scss'],
  animations: [animateFadeIn],
})
export class KategorialComponent implements OnInit {

  constructor(private router: Router, private spinner: SpinnerCloakService, private kategorialService: KategorialService) {}

  @Output() viewDetail: EventEmitter<string> = new EventEmitter();
  kategorial: Array<Kategorial>;

  ngOnInit(): void {
    this.getAllKategorial();
  }

  private getAllKategorial() {
    this.spinner.setSpinner(true);
    this.kategorial = [];
    const subscription: Subscription = this.kategorialService.getAllKategorial()
      .subscribe((response: Array<Kategorial>) => {
        subscription.unsubscribe();
        this.kategorial = response;
        this.spinner.setSpinner(false);
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }

  navigate(kategorialId: string) {
    this.router.navigate(['kegiatan', 'kategorial', kategorialId]);
    this.viewDetail.emit(kategorialId);
  }
}
