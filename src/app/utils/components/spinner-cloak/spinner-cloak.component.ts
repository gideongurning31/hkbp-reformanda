import { Component, OnInit } from '@angular/core';
import { SpinnerCloakService } from './spinner-cloak.service';

@Component({
  selector: 'app-spinner',
  templateUrl: 'spinner-cloak.component.html',
  styleUrls: ['spinner-cloak.component.scss'],
})
export class SpinnerCloakComponent implements OnInit {
  constructor(private spinnerService: SpinnerCloakService) {}

  showSpinner: boolean;

  ngOnInit() {
    this.spinnerService.displaySpinner$.subscribe((display: boolean) => (this.showSpinner = display));
  }
}
