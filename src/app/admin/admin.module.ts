import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils-module';
import { AdminRoutingModule } from './admin-route.module';
import { KategorialService } from '../service/kategorial-service';
import { KegiatanService } from '../service/kegiatan.service';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, UtilsModule, AdminRoutingModule],
  providers: [KategorialService, KegiatanService],
})
export class AdminModule {}
