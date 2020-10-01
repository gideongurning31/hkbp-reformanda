import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { KegiatanService } from 'src/app/service/kegiatan.service';
import { Kegiatan } from 'src/app/pages/kegiatan/kegiatan.model';
import { ActionType } from 'src/app/utils/common.enum';
import { AdminKegiatanFormComponent } from './admin-kegiatan-form/admin-kegiatan-form.component';

@Component({
  selector: 'app-admin-kegiatan',
  templateUrl: 'admin-kegiatan.component.html',
  styleUrls: ['../admin-forms.component.scss']
})
export class AdminKegiatanComponent implements OnInit {
  constructor(
    private kegiatanService: KegiatanService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private spinner: SpinnerCloakService) {}

  dataTable: Array<Kegiatan>;

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.dataTable = [];
    this.spinner.setSpinner(true);
    const subscription: Subscription = this.kegiatanService.getAll()
      .subscribe((response: Array<Kegiatan>) => {
        subscription.unsubscribe();
        this.dataTable = response;
        this.spinner.setSpinner(false);
      }, error => {
        subscription.unsubscribe();
        console.error(error);
        this.spinner.setSpinner(false);
      });
  }

  openForm(type: string, content?: Kegiatan) {
    const dialogRef = this.dialog.open(AdminKegiatanFormComponent, { data: { action: ActionType[type], content }});
    dialogRef.componentInstance.unauthorized.subscribe(() => dialogRef.close());
    dialogRef.componentInstance.successSubmit.subscribe((success?: boolean) => {
      if (success) {
        dialogRef.close();
        this.getDataTable();
        this.snackBar.open(SubmitMessage[ActionType[type]], 'x', { duration: 2500, horizontalPosition: 'end', verticalPosition: 'bottom' });
      }
    });
  }

  displayUrl(url: string, maxlength: number = 20): string {
    return url.substring(0, maxlength) + '...';
  }
}

enum SubmitMessage {
  CREATE = 'Data Renungan Harian baru berhasil ditambahkan.',
  UPDATE = 'Data Renungan Harian berhasil diperbaharui.',
  DELETE = 'Data Renungan Harian telah dihapus.',
}
