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
    let endpoint = api + '/warta/';
    if (!id) endpoint += 'latest';
    else endpoint += `id/${id}`;
    return this.http.download(endpoint);
  }

  upload(fileDate: any, file: File) {
    return this.http.post(api + '/warta', { file, fileDate });
  }

}
