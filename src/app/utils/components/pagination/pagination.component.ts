import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Paging } from '../../paging-helper.service';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Output() setPage: EventEmitter<number> = new EventEmitter();
  @Input() paging: Paging;
  pages: Array<number> = [];

  ngOnInit() {
    this.pages = [];
    for (let i = 0; i <= this.paging.totalPage; i++) this.pages.push(i + 1);
  }

  onPageClick(page: number) {
    if (page > 0 && page !== this.paging.page) {
      this.setPage.emit(page);
    }
  }

}
