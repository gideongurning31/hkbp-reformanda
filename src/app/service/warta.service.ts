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

  latestWarta(): Observable<Blob> {
    return this.http.download(api + '/warta/latest');
  }

  wartaById(id: string): Observable<Blob> {
    return this.http.download(api + '/warta/id/' + id);
  }

}
