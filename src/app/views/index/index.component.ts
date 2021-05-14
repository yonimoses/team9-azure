import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.router.navigate(['admin/settings'])
  }
}
