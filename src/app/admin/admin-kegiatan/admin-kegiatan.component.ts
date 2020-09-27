import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { KegiatanService } from 'src/app/service/kegiatan.service';
import { Kegiatan } from 'src/app/pages/kegiatan/kegiatan.model';

@Component({
  selector: 'app-admin-kegiatan',
  templateUrl: 'admin-kegiatan.component.html',
  styleUrls: ['../admin-forms.component.scss'],
})
export class AdminKegiatanComponent implements OnInit {
  constructor(private kegiatanService: KegiatanService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  dataTable: Array<Kegiatan>;

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.dataTable = [];
    const subscription: Subscription = this.kegiatanService.getAll()
      .subscribe((response: Array<Kegiatan>) => {
        subscription.unsubscribe();
        this.dataTable = response;
      }, error => {
        subscription.unsubscribe();
        console.error(error);
      });
  }

  openForm(type: string, content?: Kegiatan) {}

  displayUrl(url: string, maxlength: number = 20): string {
    return url.substring(0, maxlength) + '...';
  }
}

enum SubmitMessage {
  CREATE = 'Data Renungan Harian baru berhasil ditambahkan.',
  UPDATE = 'Data Renungan Harian berhasil diperbaharui.',
  DELETE = 'Data Renungan Harian telah dihapus.',
}
