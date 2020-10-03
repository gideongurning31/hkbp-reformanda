import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './components/alert-dialog.component';
import { BaseFormComponent } from './components/base-form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HttpUtilService } from './http-util.service';
import { PagingHelper } from './paging-helper.service';
import { SafeUrlPipe } from 'src/app/utils/safe-url.pipe';

@NgModule({
  declarations: [
    SafeUrlPipe,
    AlertDialogComponent,
    BaseFormComponent,
    PaginationComponent,
  ],
  entryComponents: [AlertDialogComponent],
  imports: [CommonModule, MatDialogModule],
  providers: [HttpUtilService, PagingHelper],
  exports: [SafeUrlPipe, PaginationComponent],
})
export class UtilsModule {}
