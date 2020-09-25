import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';
import { api } from './server.endpoints';

@Injectable()
export class KegiatanService {
  constructor(private http: HttpUtilService) {}

  getAll() {
    return this.http.get(api + '/kegiatan');
  }

  getCurrent() {
    return this.http.get(api + '/kegiatan/current');
  }

  getById(id: string) {
    return this.http.get(api + '/kegiatan/id/' + id);
  }
}
