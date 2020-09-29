import { Component, OnInit } from '@angular/core';
import { LabelValue } from 'src/app/utils/label-value.model';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { months, years } from './warta.datepicker';
import { WartaService } from 'src/app/service/warta.service';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';

@Component({
  selector: 'app-warta',
  templateUrl: 'warta.component.html',
  styleUrls: ['./warta.component.scss'],
  animations: [animateFadeIn],
  providers: [WartaService],
})
export class WartaComponent implements OnInit {

  constructor(private wartaService: WartaService, private spinner: SpinnerCloakService) {}

  showArchive: boolean;
  monthSelect: Array<LabelValue> = months;
  yearSelect: Array<number> = years;

  ngOnInit(): void {
    this.showArchive = false;
  }

  downloadLatest() {
    this.spinner.setSpinner(true);
    const subscription = this.wartaService.latestWarta()
      .subscribe(response => {
        subscription.unsubscribe();
        this.returnFile(response);
      }, error => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }

  private returnFile(response: Blob) {
    const newBlob = new Blob([response], { type: 'application/pdf' });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }

    this.spinner.setSpinner(false);
    const data = window.URL.createObjectURL(newBlob);
    const link = document.createElement('a');
    link.href = data;
    link.download = 'WJ-Reformanda.pdf';
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    setTimeout(() => {
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
  }
}
