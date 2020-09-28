import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';
import { api } from './server.endpoints';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpUtilService) {}

  login(payload: LoginPayload) {
    return this.http.post(api + '/login', payload);
  }

}

export interface LoginPayload {
  user: string;
  pass: string;
}

export interface TokenPayload {
  sessionId: string;
  sessionStart: any;
  username: string;
  name: string;
  admin: boolean;
}
