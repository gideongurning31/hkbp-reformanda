import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { BaseFormComponent } from 'src/app/utils/components/base-form.component';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { SpinnerCloakService } from 'src/app/utils/components/spinner-cloak/spinner-cloak.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.scss'],
  animations: [animateFadeIn],
})
export class AdminLoginComponent extends BaseFormComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService, dialog: MatDialog, spinner: SpinnerCloakService) {
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
  }

}
