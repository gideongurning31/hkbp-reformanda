import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WartaService } from 'src/app/service/warta.service';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-warta',
  templateUrl: 'admin-warta.component.html',
  styleUrls: ['../admin-forms.component.scss', 'admin-warta.component.scss'],
  providers: [WartaService],
})
export class AdminWartaComponent implements OnInit {

  constructor(private wartaService: WartaService, private spinner: SpinnerCloakService) {}

  pdfFile: File;
  fileDate: string;

  ngOnInit(): void {}

  onFileInput(files: Array<File>) {
    this.pdfFile = files[0];
  }

  submit() {
    if (this.fileDate && this.pdfFile) {
      this.spinner.setSpinner(true);
      const date = moment(this.fileDate, 'YYYY-MM-DD').unix() * 1000;
      const subsription: Subscription = this.wartaService.upload(date, this.pdfFile)
        .subscribe(response => {
          subsription.unsubscribe();
          console.log(response);
          this.spinner.setSpinner(false);
        }, (error) => {
          subsription.unsubscribe();
          console.error(error);
          this.spinner.setSpinner(false);
        });
    }
  }

}
