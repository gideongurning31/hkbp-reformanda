import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpUtilService {

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    return this.http.get(endpoint);
  }

  post(endpoint: string, payload?: any) {
    return this.http.post(endpoint, payload);
  }

  download(endpoint: string): Observable<Blob> {
    return this.http.get(endpoint, { responseType: 'blob' });
  }

  upload(endpoint: string, params?: FormData) {
    return this.http.post(endpoint, params);
  }

}
