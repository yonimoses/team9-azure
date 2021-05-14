import {Component, Input, OnInit} from '@angular/core';
import {SearchResultWrapper} from '../../navbars/admin-navbar/admin-navbar.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-card-not-found',
  templateUrl: './card-not-found.component.html',
})
export class CardNotFoundComponent implements OnInit {



  @Input()
  wrapper: SearchResultWrapper;


  email: string;
  MAIL_URL = 'https://aws.amazon.com';
  message  = 'test';
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.message = null;

  }


  notifyMe() {
    this.http.post<any>(this.MAIL_URL ,{email : this.email }).subscribe(res => {
      console.log('res: ', res);
      this.wrapper = null;
      this.message = 'Thanks, we\'ll let you know once the package is ready';

    }, error => {
      console.log('error', error);
      this.wrapper = null;
      this.message = 'Sorry, there was an error with our email service, please try again later';
    });
  }
}
