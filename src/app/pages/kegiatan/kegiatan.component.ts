import { Component, OnInit } from '@angular/core';
import { animateFadeDown } from 'src/app/utils/common-animation';
import { Subscription } from 'rxjs';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { KegiatanService } from 'src/app/service/kegiatan.service';
import { Kegiatan } from './kegiatan.model';

@Component({
  selector: 'app-kegiatan',
  templateUrl: 'kegiatan.component.html',
  styleUrls: ['./kegiatan.component.scss'],
  animations: [animateFadeDown],
})
export class KegiatanComponent implements OnInit {

  constructor(private spinner: SpinnerCloakService, private kegiatanService: KegiatanService) {}

  events: Kegiatan;

  ngOnInit(): void {
    this.checkActiveEvents();
  }

  checkActiveEvents() {
    this.spinner.setSpinner(true);
    const subsription: Subscription = this.kegiatanService.getCurrent()
      .subscribe((response: Array<Kegiatan>) => {
        subsription.unsubscribe();
        this.events = response[0];
        this.spinner.setSpinner(false);
      }, (error) => {
        subsription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }
}
