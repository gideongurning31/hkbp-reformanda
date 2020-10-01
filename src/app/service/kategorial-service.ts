import { Injectable } from '@angular/core';
import { HttpUtilService } from '../utils/http-util.service';

@Injectable()
export class KategorialService {
  constructor(private http: HttpUtilService) {}

  getAllKategorial() {
    return this.http.get('/api/kategorial');
  }

  getKategorialById(id: string) {
    return this.http.get('/api/kategorial/' + id);
  }
}
