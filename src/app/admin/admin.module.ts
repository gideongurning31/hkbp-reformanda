import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UtilsModule } from '../utils/utils-module';
import { AdminRoutingModule } from './admin-route.module';
import { KategorialService } from '../service/kategorial-service';
import { KegiatanService } from '../service/kegiatan.service';
import { AdminComponent } from './admin.component';
import { AdminArtikelComponent } from './admin-artikel/admin-artikel.component';
import { AdminDatabaseComponent } from './admin-database/admin-database.component';
import { AdminKategorialComponent } from './admin-kategorial/admin-kategorial.component';
import { AdminKegiatanComponent } from './admin-kegiatan/admin-kegiatan.component';
import { AdminRenunganComponent } from './admin-renungan/admin-renungan.component';
import { AdminRenunganFormComponent } from './admin-renungan/admin-renungan-form/admin-renungan-form.component';
import { AdminWartaComponent } from './admin-warta/admin-warta.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminArtikelComponent,
    AdminDatabaseComponent,
    AdminKategorialComponent,
    AdminKegiatanComponent,
    AdminRenunganComponent,
    AdminRenunganFormComponent,
    AdminWartaComponent,
  ],
  entryComponents: [AdminRenunganFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    UtilsModule,
    AdminRoutingModule,
  ],
  providers: [KategorialService, KegiatanService],
})
export class AdminModule {}
