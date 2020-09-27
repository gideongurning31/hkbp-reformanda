import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AlertDialogComponent } from './alert-dialog.component';

@Component({
  selector: 'app-base-form',
  template: '',
})
export class BaseFormComponent {
  constructor(private dialog: MatDialog) {}
  successSubmit: EventEmitter<boolean> = new EventEmitter();
  failedSubmit: EventEmitter<string> = new EventEmitter();
  formErrors: {};

  releaseFormError(key: string): void {
    this.formErrors[key] = null;
  }

  okResponse(subscription: Subscription, response: any) {
    subscription.unsubscribe();
    this.successSubmit.emit(true);
  }

  onErrorResponse(subscription: Subscription, e: any) {
    subscription.unsubscribe();
    let message = 'An unexpected error occurred.';
    if (e.error && typeof e.error === typeof 'string') message = e.error;
    else if (!e.status || e.status === 0) message = 'Terjadi kesalahan internal pada server.';
    this.alertDialog(message);
  }

  alertDialog(message: string) {
    this.dialog.open(AlertDialogComponent, { data: message });
  }
}
