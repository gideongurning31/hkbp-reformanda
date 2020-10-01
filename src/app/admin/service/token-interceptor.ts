import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertDialogComponent } from 'src/app/utils/components/alert-dialog.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` }});
    return next.handle(request).pipe(tap(() => {}, (err) => this.handleUnauthorized(err)));
  }

  private handleUnauthorized(err: HttpErrorResponse) {
    const unauthorized = [401, 403];
    if (unauthorized.indexOf(err.status) === -1) return err;
    this.dialog.open(AlertDialogComponent, { data: 'Sesi tidak valid, silakan login ulang.' });
    localStorage.clear();
    this.router.navigate(['login']);
    return;
  }

}
