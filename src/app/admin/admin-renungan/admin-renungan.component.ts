import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
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
    private renunganService: RenunganService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {}

  dataTable: Array<Renungan>;

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.spinner.setSpinner(true);
    this.dataTable = [];
    const subscription: Subscription = this.renunganService.getAllRenungan()
      .subscribe((response: Array<Renungan>) => {
        subscription.unsubscribe();
        this.dataTable = response;
        this.spinner.setSpinner(false);
      }, (error) => {
        subscription.unsubscribe();
        console.error(error);
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
        this.snackBar.open(SubmitMessage[ActionType[type]], 'x', { duration: 2500, horizontalPosition: 'end', verticalPosition: 'bottom' });
      }
    });
  }
}

enum SubmitMessage {
  CREATE = 'Data Renungan Harian baru berhasil ditambahkan.',
  UPDATE = 'Data Renungan Harian berhasil diperbaharui.',
  DELETE = 'Data Renungan Harian telah dihapus.'
}
