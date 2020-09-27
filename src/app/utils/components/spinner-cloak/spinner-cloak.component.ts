import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerCloakService } from './spinner-cloak.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner-cloak.component.html',
  styleUrls: ['./spinner-cloak.component.scss'],
})
export class SpinnerCloakComponent implements OnInit {
  showSpinner = false;

  constructor(private spinnerService: SpinnerCloakService, private detector: ChangeDetectorRef) {}

  ngOnInit() {}
}
