import { Component, OnInit, Input } from '@angular/core';
import { Paging } from '../../paging-helper.service';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent implements OnInit {

  constructor() {}

  @Input() paging: Paging;

  ngOnInit() {}

}
