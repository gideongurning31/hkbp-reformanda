import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LabelValue } from 'src/app/utils/label-value.model';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { months, years } from './warta.datepicker';
import { WartaService } from 'src/app/service/warta.service';
import { FileHelperService } from 'src/app/utils/file-helper.service';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';

@Component({
  selector: 'app-warta',
  templateUrl: 'warta.component.html',
  styleUrls: ['./warta.component.scss'],
  animations: [animateFadeIn],
  providers: [WartaService, FileHelperService],
})
export class WartaComponent implements OnInit {

  constructor(private wartaService: WartaService, private fileHelper: FileHelperService, private spinner: SpinnerCloakService) {}

  searchForm: FormGroup;
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

  downloadLatest() {
    this.spinner.setSpinner(true);
    const subscription = this.wartaService.latestWarta()
      .subscribe(response => {
        subscription.unsubscribe();
        this.fileHelper.downloadFile(response);
        this.spinner.setSpinner(false);
      }, error => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }

  searchArchive() {
    const value = this.searchForm.value;
    this.formError = !value.month || !value.year;
    if (!this.formError) console.log(`${value.month}/${value.year}`);
  }

}
