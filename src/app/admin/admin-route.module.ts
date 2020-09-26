import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminKategorialComponent } from './admin-kategorial/admin-kategorial.component';
import { AdminKegiatanComponent } from './admin-kegiatan/admin-kegiatan.component';
import { AdminRenunganComponent } from './admin-renungan/admin-renungan.component';
import { AdminWartaComponent } from './admin-warta/admin-warta.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'kategorial', component: AdminKategorialComponent },
  { path: 'kegiatan', component: AdminKegiatanComponent },
  { path: 'renungan', component: AdminRenunganComponent },
  { path: 'warta', component: AdminWartaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
