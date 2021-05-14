import {Component, Input, OnInit} from '@angular/core';
import {SearchResultWrapper} from '../../navbars/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls : ['card.scss']
})
export class CardStatsComponent implements OnInit {


  @Input()
  wrapper: SearchResultWrapper;

  private _statIconColor = 'bg-red-500';

  constructor() {
  }

  ngOnInit(): void {
  }
}
