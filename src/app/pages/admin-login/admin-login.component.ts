import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { BaseFormComponent } from 'src/app/utils/components/base-form.component';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.scss'],
  animations: [animateFadeIn],
})
export class AdminLoginComponent extends BaseFormComponent implements OnInit {

  constructor(private authService: AuthenticationService, private snackBar: MatSnackBar, dialog: MatDialog, spinner: SpinnerCloakService) {
    super(dialog, spinner);
  }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      pass: new FormControl(null, Validators.required),
    });
    this.formErrors = { user: null, pass: null };
  }

  submit() {
    if (this.validateForm()) {
      this.setSpinner(true);
      const subscription: Subscription = this.authService.login(this.loginForm.value)
        .subscribe((response: string) => this.onLoginSuccess(subscription, response), (error) => this.onErrorResponse(subscription, error));
    }
  }

  private validateForm(): boolean {
    const values = this.loginForm.value;
    Object.keys(this.formErrors).forEach((key) => {
      if (values[key] === null || values[key].trim() === '') this.formErrors[key] = '*kolom wajib diisi!';
    });
    return this.noValidationErrors();
  }

  private onLoginSuccess(subscription: Subscription, response: any) {
    subscription.unsubscribe();
    if (!response.token) {
      this.alertDialog('Terjadi kegagalan autentikasi dari server, harap hubungi Tim IT Reformanda.');
      this.setSpinner(false);
      return;
    }

    this.authService.setUserSession(response.token);
    this.snackBar.open('Login berhasil.', 'x', { duration: 2500, horizontalPosition: 'end', verticalPosition: 'bottom' });
    this.setSpinner(false);
  }
}
