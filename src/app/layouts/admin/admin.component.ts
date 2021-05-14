import {Component, OnInit} from '@angular/core';
import {SearchResultWrapper} from '../../components/navbars/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  public wrapper: SearchResultWrapper;

  constructor() {
  }

  ngOnInit(): void {
  }

  doResult(wrapper: SearchResultWrapper) {
    console.log(wrapper);
    this.wrapper = wrapper;
  }
}
