import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
})
export class AdminNavbarComponent implements OnInit {
  constructor(private http:HttpClient) {
  }
  API_URL = '';
  package: string;

  ngOnInit(): void {
  }

  search() {
    console.log('Searching for ' + this.package);

    this.http.get('get', {
      params: new HttpParams().set('logNamespace', logNamespace)
    })
  }
}
