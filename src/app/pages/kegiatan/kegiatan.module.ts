import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KegiatanRoutingModule } from './kegiatan-route.module';
import { KegiatanComponent } from './kegiatan.component';

@NgModule({
  declarations: [KegiatanComponent],
  imports: [CommonModule, KegiatanRoutingModule],
  providers: [],
})
export class KegiatanModule {}
