import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from '../utils/http-util.service';
import { api } from './server.endpoints';

@Injectable()
export class WartaService {

  constructor(private http: HttpUtilService) {}

  listWarta() {
    return this.http.get(api + '/warta');
  }

  wartaArchive(month: string, year: string) {
    return this.http.get(`${api}/warta/archive/${month}/${year}`);
  }

  download(id: string = null): Observable<Blob> {
    let endpoint = api + '/warta/download';
    if (id) endpoint += `/${id}`;
    return this.http.download(endpoint);
  }

  upload(fileDate: any, file: File) {
    const params = new FormData();
    params.append('fileDate', fileDate);
    params.append('file', file);
    return this.http.upload(api + '/warta', params);
  }

}
