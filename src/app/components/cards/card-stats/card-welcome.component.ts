import {Component, Input, OnInit} from '@angular/core';
import {SearchResultWrapper} from '../../navbars/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-card-welcome',
  templateUrl: './card-welcome.component.html',
})
export class CardWelcomeComponent implements OnInit {



  @Input()
  wrapper: SearchResultWrapper;



  private _statIconColor = 'bg-red-500';

  constructor() {
  }

  ngOnInit(): void {
  }
}
