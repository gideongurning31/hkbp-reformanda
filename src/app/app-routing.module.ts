import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './pages/beranda/beranda.component';
import { ArtikelComponent } from './pages/artikel/artikel.component';
import { WartaComponent } from './pages/warta/warta.component';
import { InfoComponent } from './pages/info/info.component';
import { NotFoundComponent } from './pages/not-found/not-found-component';

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
    loadChildren: () => import('./pages/renungan/renungan.module').then(load => load.RenunganModule)
  },
  {
    path: 'artikel',
    component: ArtikelComponent,
  },
  {
    path: 'warta',
    component: WartaComponent,
  },
  {
    path: 'kegiatan',
    loadChildren: () => import('./pages/kegiatan/kegiatan.module').then(load => load.KegiatanModule),
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
