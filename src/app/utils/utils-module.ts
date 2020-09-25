import { NgModule } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { SafeUrlPipe } from 'src/app/utils/safe-url.pipe';

@NgModule({
  declarations: [SafeUrlPipe],
  imports: [],
  providers: [HttpUtilService],
  exports: [SafeUrlPipe]
})
export class UtilsModule {}
