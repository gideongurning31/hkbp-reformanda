import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { RenunganComponent } from './pages/renungan/renungan.component';
import { WartaComponent } from './pages/warta/warta.component';
import { KegiatanComponent } from './pages/kegiatan/kegiatan.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/beranda',
    pathMatch: 'full',
  },
  {
    path: 'beranda',
    component: BerandaComponent,
  },
  {
    path: 'renungan',
    component: RenunganComponent,
  },
  {
    path: 'warta',
    component: WartaComponent,
  },
  {
    path: 'kegiatan',
    component: KegiatanComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
