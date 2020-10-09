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

  events: Array<Kegiatan>;
  currentCarousel: number;

  ngOnInit(): void {
    this.checkActiveEvents();
    this.currentCarousel = 0;
  }

  checkActiveEvents() {
    this.spinner.setSpinner(true);
    this.events = [];
    const subsription: Subscription = this.kegiatanService
      .getCurrent()
      .subscribe((response: Array<Kegiatan>) => {
          subsription.unsubscribe();
          this.events = response;
          this.spinner.setSpinner(false);
        }, error => {
          subsription.unsubscribe();
          this.spinner.setSpinner(false);
        });
  }

  prevCarousel() {
    if (this.currentCarousel > 0) this.currentCarousel -= 1;
    else this.currentCarousel = this.events.length - 1;
  }

  nextCarousel() {
    if (this.currentCarousel < this.events.length - 1) this.currentCarousel += 1;
    else this.currentCarousel = 0;
  }
}
