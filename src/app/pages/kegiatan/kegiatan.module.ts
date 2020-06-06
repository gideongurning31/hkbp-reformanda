import { NgModule } from '@angular/core';
import { KegiatanRoutingModule } from './kegiatan-route.module';
import { KegiatanComponent } from './kegiatan.component';

@NgModule({
  declarations: [KegiatanComponent],
  imports: [KegiatanRoutingModule],
  providers: [],
})
export class KegiatanModule {}
