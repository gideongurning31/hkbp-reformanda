import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';
import { api } from 'src/app/service/server.endpoints';

@Injectable()
export class RenunganService {
  constructor(private http: HttpUtilService) {}

  getAllRenungan() {
    return this.http.get(api + '/renungan');
  }

  getRenunganById(id: string) {
    return this.http.get(api + '/renungan/id/' + id);
  }

  getRenunganByDate(date: string) {
    return this.http.get(api + '/renungan/tanggal/' + date);
  }
}
