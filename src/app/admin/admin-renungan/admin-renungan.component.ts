import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { PagingHelper, ApiPaging, Paging } from 'src/app/utils/paging-helper.service';
import { RenunganService } from 'src/app/service/renungan.service';
import { Renungan } from 'src/app/pages/renungan/renungan.model';
import { ActionType } from 'src/app/utils/common.enum';
import { AdminRenunganFormComponent } from './admin-renungan-form/admin-renungan-form.component';

@Component({
  selector: 'app-admin-renungan',
  templateUrl: 'admin-renungan.component.html',
  styleUrls: ['../admin-forms.component.scss'],
})
export class AdminRenunganComponent implements OnInit {

  constructor(
    private spinner: SpinnerCloakService,
    private pagingHelper: PagingHelper,
    private renunganService: RenunganService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {}

  dataTable: Array<Renungan>;
  paging: Paging;

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.spinner.setSpinner(true);
    this.dataTable = [];
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response: ApiPaging) => {
        subscription.unsubscribe();
        this.paging = this.pagingHelper.getPaging(response);
        this.dataTable = this.paging.data;
        this.spinner.setSpinner(false);
      }, (error) => {
        subscription.unsubscribe();
        this.snackAlert('Gagal mendapatkan data dari server.');
        this.spinner.setSpinner(false);
      });
  }

  openForm(type: string, content?: Renungan) {
    const dialogRef = this.dialog.open(AdminRenunganFormComponent, { data: { action: ActionType[type], content }});
    dialogRef.componentInstance.unauthorized.subscribe(() => dialogRef.close());
    dialogRef.componentInstance.successSubmit.subscribe((success?: boolean) => {
      if (success) {
        dialogRef.close();
        this.getDataTable();
        this.snackAlert(SubmitMessage[ActionType[type]]);
      }
    });
  }

  private snackAlert(message: string): void {
    this.snackBar.open(message, 'x', {
      duration: 2500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}

enum SubmitMessage {
  CREATE = 'Data Renungan Harian baru berhasil ditambahkan.',
  UPDATE = 'Data Renungan Harian berhasil diperbaharui.',
  DELETE = 'Data Renungan Harian telah dihapus.'
}
