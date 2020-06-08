import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from './server.endpoints';

@Injectable()
export class KategorialService {

  constructor(private http: HttpClient) {}

  getAllKategorial() {
    return this.http.get<any>(api + '/kategorial');
  }

}
