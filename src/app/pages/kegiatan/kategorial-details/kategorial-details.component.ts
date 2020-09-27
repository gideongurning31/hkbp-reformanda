import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { animateFadeDown } from 'src/app/utils/common-animation';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { KategorialService } from 'src/app/service/kategorial-service';
import { Kategorial } from '../kategorial.model';

@Component({
  selector: 'app-kategorial-details',
  templateUrl: 'kategorial-details.html',
  styleUrls: ['./kategorial-details.scss'],
  animations: [animateFadeDown],
})
export class KategorialDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private spinner: SpinnerCloakService, private kategorialService: KategorialService) {}

  kategorial: Kategorial;

  ngOnInit(): void {
    this.getKategorialDesc(this.route.snapshot.paramMap.get('id'));
  }

  getKategorialDesc(id: string) {
    this.spinner.setSpinner(true);
    const subscription: Subscription = this.kategorialService.getKategorialById(id)
      .subscribe((response: Kategorial) => {
        subscription.unsubscribe();
        this.kategorial = response;
        this.spinner.setSpinner(false);
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }
}
