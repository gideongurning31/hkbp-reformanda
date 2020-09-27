import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerCloakService {
  constructor() {}

  private displaySpinner = new Subject<boolean>();
  displaySpinner$ = this.displaySpinner.asObservable();

  setSpinner(display: boolean) {
    this.displaySpinner.next(display);
  }
}
