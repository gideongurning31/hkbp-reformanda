import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animateFadeIn } from 'src/app/utils/common-animation';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: 'admin-login.component.html',
  styleUrls: ['admin-login.component.scss'],
  animations: [animateFadeIn],
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {}

}
