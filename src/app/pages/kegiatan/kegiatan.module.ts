import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KegiatanRoutingModule } from './kegiatan-route.module';
import { KegiatanComponent } from './kegiatan.component';
import { KategorialComponent } from './kategorial/kategorial.component';
import { KategorialDetailsComponent } from './kategorial-details/kategorial-details.component';

@NgModule({
  declarations: [
    KegiatanComponent,
    KategorialComponent,
    KategorialDetailsComponent,
  ],
  imports: [CommonModule, KegiatanRoutingModule],
  providers: [],
})
export class KegiatanModule {}
