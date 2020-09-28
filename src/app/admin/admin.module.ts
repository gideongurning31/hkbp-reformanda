import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UtilsModule } from '../utils/utils-module';
import { AdminRoutingModule } from './admin-route.module';
import { AdminGuard } from './service/admin-guard.service';
import { AuthenticationService } from '../service/authentication.service';
import { KategorialService } from '../service/kategorial-service';
import { KegiatanService } from '../service/kegiatan.service';
import { AdminComponent } from './admin.component';
import { AdminKategorialComponent } from './admin-kategorial/admin-kategorial.component';
import { AdminKegiatanComponent } from './admin-kegiatan/admin-kegiatan.component';
import { AdminKegiatanFormComponent } from './admin-kegiatan/admin-kegiatan-form/admin-kegiatan-form.component';
import { AdminRenunganComponent } from './admin-renungan/admin-renungan.component';
import { AdminRenunganFormComponent } from './admin-renungan/admin-renungan-form/admin-renungan-form.component';
import { AdminWartaComponent } from './admin-warta/admin-warta.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminKategorialComponent,
    AdminKegiatanComponent,
    AdminKegiatanFormComponent,
    AdminRenunganComponent,
    AdminRenunganFormComponent,
    AdminWartaComponent,
  ],
  entryComponents: [AdminKegiatanFormComponent, AdminRenunganFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    UtilsModule,
    AdminRoutingModule,
  ],
  providers: [
    AdminGuard,
    AuthenticationService,
    KategorialService,
    KegiatanService,
  ],
})
export class AdminModule {}
