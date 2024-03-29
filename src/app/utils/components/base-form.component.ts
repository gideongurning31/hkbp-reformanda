import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AlertDialogComponent } from './alert-dialog.component';
import { SpinnerCloakService } from './spinner-cloak/spinner-cloak.service';

@Component({
  selector: 'app-base-form',
  template: '',
})
export class BaseFormComponent {

  constructor(private dialog: MatDialog, private spinner: SpinnerCloakService) {}

  successSubmit: EventEmitter<boolean> = new EventEmitter();
  failedSubmit: EventEmitter<string> = new EventEmitter();
  unauthorized: EventEmitter<void> = new EventEmitter();
  formErrors: {};

  releaseFormErrors(keys: Array<string>): void {
    keys.forEach((key) => {
      if (this.formErrors.hasOwnProperty(key)) this.formErrors[key] = null;
    });
  }

  okResponse(subscription: Subscription, response: any) {
    subscription.unsubscribe();
    this.spinner.setSpinner(false);
    this.successSubmit.emit(true);
  }

  onErrorResponse(subscription: Subscription, e: any) {
    subscription.unsubscribe();
    this.spinner.setSpinner(false);
    if ([401, 403].indexOf(e.status) > -1) this.unauthorized.emit();
    else this.handleCommonError(e);
  }

  alertDialog(message: string) {
    this.dialog.open(AlertDialogComponent, { data: message });
  }

  noValidationErrors(): boolean {
    let count = 0;
    Object.keys(this.formErrors).forEach(key => {
      if (this.formErrors[key] && this.formErrors[key] !== '') count++;
    });
    return count === 0;
  }

  setSpinner(display: boolean) {
    this.spinner.setSpinner(display);
  }

  private handleCommonError(e: any) {
    let message = 'Something went wrong.';
    if (e.error && typeof e.error === typeof 'string') message = e.error;
    else if (!e.status || e.status === 0) message = 'Terjadi kesalahan internal pada server.';
    this.alertDialog(message);
  }
}
