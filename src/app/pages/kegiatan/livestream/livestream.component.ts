import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { animateFadeDown } from 'src/app/utils/common-animation';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { KegiatanService } from 'src/app/service/kegiatan.service';
import { Kegiatan } from '../kegiatan.model';

@Component({
  selector: 'app-livestream',
  templateUrl: 'livestream.component.html',
  styleUrls: ['./livestream.component.scss'],
  animations: [animateFadeDown],
  providers: [KegiatanService],
})
export class LiveStreamComponent implements OnInit {

  constructor(private spinner: SpinnerCloakService, private kegiatanService: KegiatanService) {}

  events: Kegiatan;

  ngOnInit(): void {
    this.checkActiveEvents();
  }

  checkActiveEvents() {
    this.spinner.setSpinner(true);
    const subsription: Subscription = this.kegiatanService
      .getCurrent()
      .subscribe((response: Array<Kegiatan>) => {
        subsription.unsubscribe();
        this.events = response[0];
        this.spinner.setSpinner(false);
      }, error => {
        subsription.unsubscribe();
        this.spinner.setSpinner(false);
      });
  }
}
