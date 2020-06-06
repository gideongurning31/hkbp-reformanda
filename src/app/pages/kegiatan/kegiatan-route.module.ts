import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegiatanComponent } from './kegiatan.component';

const routes: Routes = [
  {
    path: '',
    component: KegiatanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KegiatanRoutingModule {}
