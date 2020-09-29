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

  // TODO: Endpoint to query monthly archive
  wartaArchive(month: string, year: string) {
    const period = `${month}/${year}`;
    return this.http.get(api + '/warta');
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
