import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from '../../navbars/admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
})
export class CardProfileComponent implements OnInit {
  constructor() {
  }

  @Input()
  result: SearchResult;

  ngOnInit(): void {
  }
}
