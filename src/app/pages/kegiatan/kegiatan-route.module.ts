import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegiatanComponent } from './kegiatan.component';
import { KategorialDetailsComponent } from './kategorial-details/kategorial-details.component';

const routes: Routes = [
  {
    path: '',
    component: KegiatanComponent,
  },
  {
    path: 'kategorial/:id',
    component: KategorialDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KegiatanRoutingModule {}
