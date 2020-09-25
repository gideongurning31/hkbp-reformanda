import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KegiatanRoutingModule } from './kegiatan-route.module';
import { UtilsModule } from 'src/app/utils/utils-module';
import { KegiatanComponent } from './kegiatan.component';
import { KategorialComponent } from './kategorial/kategorial.component';
import { KategorialDetailsComponent } from './kategorial-details/kategorial-details.component';
import { LiveStreamComponent } from './livestream/livestream.component';
import { KategorialService } from 'src/app/service/kategorial-service';
import { KegiatanService } from 'src/app/service/kegiatan.service';

@NgModule({
  declarations: [
    KegiatanComponent,
    KategorialComponent,
    KategorialDetailsComponent,
    LiveStreamComponent,
  ],
  imports: [CommonModule, KegiatanRoutingModule, UtilsModule],
  providers: [KategorialService, KegiatanService],
})
export class KegiatanModule {}
