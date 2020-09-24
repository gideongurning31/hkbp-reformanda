import { NgModule } from '@angular/core';
import { SafeUrlPipe } from 'src/app/utils/safe-url.pipe';

@NgModule({
  declarations: [SafeUrlPipe],
  imports: [],
  providers: [],
  exports: [SafeUrlPipe],
})
export class UtilsModule {}
