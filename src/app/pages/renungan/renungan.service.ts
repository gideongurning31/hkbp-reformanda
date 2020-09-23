import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/app/service/server.endpoints';
import { Renungan, listRenungan } from './renungan.content';

@Injectable()
export class RenunganService {
  constructor(private http: HttpClient) {}

  private returnMockRenungan(): Array<Renungan> {
    return listRenungan;
  }

  getAllRenungan() {
    setTimeout(() => this.returnMockRenungan(), 500);
  }

  getRenunganToday() {
    const renungan: Renungan = this.returnMockRenungan()[0];
    setTimeout(() => renungan, 500);
  }

  getRenunganById(id: string) {
    return this.http.get<any>(api + '/renungan/id/' + id);
  }

  getRenunganByDate(date: string) {
    return this.http.get<any>(api + '/renungan/tanggal/' + date);
  }
}
