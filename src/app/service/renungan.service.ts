import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';
import { Renungan } from '../pages/renungan/renungan.model';
import { ActionType } from '../utils/common.enum';

@Injectable()
export class RenunganService {
  constructor(private http: HttpUtilService) {}

  getAllRenungan() {
    return this.http.get('/api/renungan');
  }

  getRenunganById(id: string) {
    return this.http.get('/api/renungan/id/' + id);
  }

  getRenunganByDate(date: string) {
    return this.http.get('/api/renungan/tanggal/' + date);
  }

  submit(action: ActionType, payload: Renungan) {
    let endpoint = '/api/renungan/';
    if (action === ActionType.UPDATE) endpoint += payload.id;
    else if (action === ActionType.DELETE) endpoint += `delete/${payload.id}`;
    return this.http.post(endpoint, payload);
  }
}
