import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenunganComponent } from './renungan.component';
import { RenunganService } from 'src/app/service/renungan.service';

@NgModule({
  declarations: [RenunganComponent],
  imports: [CommonModule],
  providers: [RenunganService],
})
export class RenunganModule {}
