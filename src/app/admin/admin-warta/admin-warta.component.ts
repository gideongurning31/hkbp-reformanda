import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { BaseFormComponent } from 'src/app/utils/components/base-form.component';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { WartaService } from 'src/app/service/warta.service';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-warta',
  templateUrl: 'admin-warta.component.html',
  styleUrls: ['../admin-forms.component.scss', 'admin-warta.component.scss'],
  providers: [WartaService],
})
export class AdminWartaComponent extends BaseFormComponent implements OnInit {

  constructor(dialog: MatDialog, spinner: SpinnerCloakService, private wartaService: WartaService) {
    super(dialog, spinner);
  }

  pdfFile: File;
  fileDate: string;

  ngOnInit(): void {}

  onFileInput(files: Array<File>) {
    this.pdfFile = files[0];
  }

  submit() {
    if (this.fileDate && this.pdfFile) {
      this.setSpinner(true);
      const date = moment(this.fileDate, 'YYYY-MM-DD').unix() * 1000;
      const subsription: Subscription = this.wartaService.upload(date, this.pdfFile)
        .subscribe(() => this.onSuccessUpload(subsription), error => this.onErrorResponse(subsription, error));
    }
  }

  onSuccessUpload(subsription: Subscription) {
    subsription.unsubscribe();
    this.fileDate = null;
    this.pdfFile = null;
    this.setSpinner(false);
    this.alertDialog('Warta berhasil diunggah.');
  }
}
