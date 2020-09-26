import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpUtilService } from './http-util.service';
import { AlertDialogComponent } from './components/alert-dialog.component';
import { SafeUrlPipe } from 'src/app/utils/safe-url.pipe';

@NgModule({
  declarations: [SafeUrlPipe, AlertDialogComponent],
  entryComponents: [AlertDialogComponent],
  imports: [CommonModule, MatDialogModule],
  providers: [HttpUtilService],
  exports: [SafeUrlPipe],
})
export class UtilsModule {}
