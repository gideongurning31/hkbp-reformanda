import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenunganRoutingModule } from './renungan-route.module';
import { UtilsModule } from 'src/app/utils/utils-module';
import { RenunganComponent } from './renungan.component';
import { RenunganDetailComponent } from './renungan-detail/renungan-detail.component';
import { RenunganArchiveComponent } from './renungan-archive/renungan-archive.component';
import { RenunganService } from 'src/app/service/renungan.service';

@NgModule({
  declarations: [
    RenunganComponent,
    RenunganDetailComponent,
    RenunganArchiveComponent,
  ],
  imports: [CommonModule, RenunganRoutingModule, UtilsModule],
  providers: [RenunganService],
})
export class RenunganModule {}
