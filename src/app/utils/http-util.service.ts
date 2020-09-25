import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpUtilService {
  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    return this.http.get(endpoint);
  }

  post(endpoint: string, payload?: any) {
    return this.http.post(endpoint, payload);
  }
}
