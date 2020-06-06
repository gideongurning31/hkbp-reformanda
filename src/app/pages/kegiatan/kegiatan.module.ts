import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KegiatanRoutingModule } from './kegiatan-route.module';
import { KegiatanComponent } from './kegiatan.component';
import { KegiatanDetailsComponent } from './kegiatan-details/kegiatan-details.component';

@NgModule({
  declarations: [KegiatanComponent, KegiatanDetailsComponent],
  imports: [CommonModule, KegiatanRoutingModule],
  providers: [],
})
export class KegiatanModule {}
