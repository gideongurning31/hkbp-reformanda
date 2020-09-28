import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(): boolean {
    if (!localStorage.getItem('token')) return true;
    const navigateTo = this.authService.isAdmin() ? 'admin' : 'beranda';
    this.router.navigate([navigateTo]);
    return false;
  }

}
