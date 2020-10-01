import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';
import { Kegiatan } from '../pages/kegiatan/kegiatan.model';
import { ActionType } from '../utils/common.enum';

@Injectable()
export class KegiatanService {
  constructor(private http: HttpUtilService) {}

  getAll() {
    return this.http.get('/api/kegiatan');
  }

  getCurrent() {
    return this.http.get('/api/kegiatan/current');
  }

  getById(id: string) {
    return this.http.get('/api/kegiatan/id/' + id);
  }

  submit(action: ActionType, payload: Kegiatan) {
    let endpoint = '/api/kegiatan/';
    if (action === ActionType.UPDATE) endpoint += payload.id;
    else if (action === ActionType.DELETE) endpoint += `delete/${payload.id}`;
    return this.http.post(endpoint, payload);
  }
}
