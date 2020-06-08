import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { KategorialService } from 'src/app/service/kategorial-service';
import { animateFadeDown } from 'src/app/utils/common-animation';

@Component({
  selector: 'app-kategorial-details',
  templateUrl: 'kategorial-details.html',
  styleUrls: ['./kategorial-details.scss'],
  animations: [animateFadeDown],
})
export class KategorialDetailsComponent implements OnInit {
  title: string;
  deskripsi: Array<string>;
  constructor(private route: ActivatedRoute, private kategorialService: KategorialService) {}

  ngOnInit(): void {
    this.title = null;
    this.deskripsi = null;
    this.route.paramMap.subscribe((p: Params) =>
      this.getKategorialDesc(p.params.id)
    );
  }

  private getKategorialDesc(id: string) {
    const subscription: Subscription = this.kategorialService
      .getAllKategorial()
      .subscribe((resp: any) => {
        subscription.unsubscribe();
        if (resp.data && typeof resp.data === typeof [] && resp.data.length > 0) {
          resp.data.forEach((k) => {
            if (k.id === id) {
              this.title = k.nama;
              this.deskripsi = k.deskripsi;
            }
          });
        }
      });
  }
}
