import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';
import { api } from './server.endpoints';

@Injectable()
export class KategorialService {
  constructor(private http: HttpUtilService) {}

  getAllKategorial() {
    return this.http.get(api + '/kategorial');
  }

}
