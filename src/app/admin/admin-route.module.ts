import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminKategorialComponent } from './admin-kategorial/admin-kategorial.component';
import { AdminKegiatanComponent } from './admin-kegiatan/admin-kegiatan.component';
import { AdminRenunganComponent } from './admin-renungan/admin-renungan.component';
import { AdminWartaComponent } from './admin-warta/admin-warta.component';
import { AdminGuard } from './service/admin-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'kategorial',
    component: AdminKategorialComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'kegiatan',
    component: AdminKegiatanComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'renungan',
    component: AdminRenunganComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'warta',
    component: AdminWartaComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
