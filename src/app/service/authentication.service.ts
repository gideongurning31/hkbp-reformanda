import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpUtilService } from '../utils/http-util.service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthenticationService {

  constructor(private route: Router, private http: HttpUtilService) {}

  login(payload: LoginPayload) {
    return this.http.post('/api/login', payload);
  }

  setUserSession(token: string): void {
    const decoded: TokenValue = jwt_decode(token);
    if (decoded.payload.admin) {
      localStorage.clear();
      localStorage.setItem('token', token);
      localStorage.setItem('sessionId', decoded.sub);
      localStorage.setItem('user', decoded.payload.name);
      this.route.navigate(['admin']);
    }
  }

  isAdmin(): boolean {
    if (!localStorage.getItem('token')) return false;
    const decoded: TokenValue = jwt_decode(localStorage.getItem('token'));
    return decoded.payload && decoded.payload.admin ? decoded.payload.admin : false;
  }
}

interface LoginPayload {
  user: string;
  pass: string;
}

interface TokenValue {
  sub: string;
  payload: TokenPayload;
  iss: string;
  iat: any;
  exp: any;
}

interface TokenPayload {
  sessionId: string;
  sessionStart: any;
  username: string;
  name: string;
  admin: boolean;
}
