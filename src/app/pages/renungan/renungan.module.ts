import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenunganRoutingModule } from './renungan-route.module';
import { RenunganComponent } from './renungan.component';
import { RenunganDetailComponent } from './renungan-detail/renungan-detail.component';
import { RenunganArchiveComponent } from './renungan-archive/renungan-archive.component';
import { RenunganService } from 'src/app/service/renungan.service';
import { SafeUrlPipe } from 'src/app/utils/safe-url.pipe';

@NgModule({
  declarations: [
    RenunganComponent,
    RenunganDetailComponent,
    RenunganArchiveComponent,
    SafeUrlPipe,
  ],
  imports: [CommonModule, RenunganRoutingModule],
  providers: [RenunganService],
})
export class RenunganModule {}
