import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) return true;
    this.router.navigate(['login']);
    return false;
  }

}
