import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.router.navigate(['admin/settings'])
  }
}
