import { NgModule } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { SafeUrlPipe } from 'src/app/utils/safe-url.pipe';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';

@NgModule({
  declarations: [SafeUrlPipe],
  entryComponents: [DialogPopupComponent],
  imports: [],
  providers: [HttpUtilService],
  exports: [SafeUrlPipe],
})
export class UtilsModule {}
