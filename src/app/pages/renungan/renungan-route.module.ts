import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RenunganComponent } from './renungan.component';

const routes: Routes = [{ path: '', component: RenunganComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenunganRoutingModule {}
