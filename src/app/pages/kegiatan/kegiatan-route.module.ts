import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegiatanComponent } from './kegiatan.component';
import { KegiatanDetailsComponent } from './kegiatan-details/kegiatan-details.component';

const routes: Routes = [
  {
    path: '',
    component: KegiatanComponent,
  },
  {
    path: 'kategorial/:id',
    component: KegiatanDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KegiatanRoutingModule {}
