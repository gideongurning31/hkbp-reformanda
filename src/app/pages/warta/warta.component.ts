import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LabelValue } from 'src/app/utils/label-value.model';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { months, years } from './warta.datepicker';
import { WartaService } from 'src/app/service/warta.service';
import { FileHelperService } from 'src/app/utils/file-helper.service';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { AlertDialogComponent } from 'src/app/utils/components/alert-dialog.component';

@Component({
  selector: 'app-warta',
  templateUrl: 'warta.component.html',
  styleUrls: ['./warta.component.scss'],
  animations: [animateFadeIn],
  providers: [WartaService, FileHelperService],
})
export class WartaComponent implements OnInit {

  constructor(
    private wartaService: WartaService,
    private fileHelper: FileHelperService,
    private spinner: SpinnerCloakService,
    private dialog: MatDialog) {}

  searchForm: FormGroup;
  archive: Array<WartaArchive>;
  monthSelect: Array<LabelValue> = months;
  yearSelect: Array<LabelValue> = years;
  formError: boolean;

  ngOnInit(): void {
    this.initSearchForm();
  }

  initSearchForm() {
    this.formError = false;
    this.searchForm = new FormGroup({
      month: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required),
    });
  }

  download(id?: string) {
    this.spinner.setSpinner(true);
    const subscription = this.wartaService.download(id)
      .subscribe(response => {
        subscription.unsubscribe();
        this.fileHelper.downloadFile(response, id);
        this.spinner.setSpinner(false);
      }, error => {
        subscription.unsubscribe();
        this.dialog.open(AlertDialogComponent, { data: 'Terjadi kesalahan teknis saat mengunduh warta, mohon coba lagi.' });
        this.spinner.setSpinner(false);
      });
  }

  searchArchive() {
    const value = this.searchForm.value;
    this.formError = !value.month || !value.year;
    if (!this.formError) {
      this.spinner.setSpinner(true);
      this.archive = [];
      const subscription: Subscription = this.wartaService.wartaArchive(value.month, value.year)
        .subscribe((response: Array<WartaArchive>) => {
          subscription.unsubscribe();
          this.archive = response;
          this.spinner.setSpinner(false);
        }, error => {
          subscription.unsubscribe();
          console.error(error);
          this.spinner.setSpinner(false);
        });
    }
  }

}

interface WartaArchive {
  id: string;
  fileDate: number;
  createdDate: number;
}
