import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable} from 'rxjs';

export interface GitHub {
  github_repo_name: string,
  issues_closed: number,
  stargazers: number,
  open_issues_count: number,
  created_at: string,
  watchers_count: number,
  forks_count: number,
  archived: boolean
}

export interface Vulns {
  medium: number,
  high: number,
  low: number
}

export interface SearchResult {
  name: string;
  version: string;
  description: string;
  repo: string;
  popularity: number;
  quality: number;
  github: GitHub;
  downloads: number,
  vulns: Vulns;
  stackoverflow: number,
  score: string
}

export interface SearchResultWrapper {
  technology: string;
  packageName: string;
  found: boolean;
  result: SearchResult;
}

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.scss']

})
export class AdminNavbarComponent implements OnInit {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {
  }

  SEARCH_URL = 'https://raw.githubusercontent.com/yonimoses/team9-azure/main/data.json';
  SEND_MAIL_URL = 'https://raw.githubusercontent.com/yonimoses/team9-azure/main/daata.json';
  packageName: string;
  technology = 'NPM';
  loading = false;

  @Output()
  public onSearchResult: EventEmitter<SearchResultWrapper> = new EventEmitter<SearchResultWrapper>();
  public wrapper: SearchResultWrapper;
  technologyModel = ['NPM', 'JAVA','DOCKER', 'PYTHON'];





  ngOnInit(): void {

  }

  doSearch(): Observable<SearchResult> {
    return this.http.get<SearchResult>('https://raw.githubusercontent.com/yonimoses/team9-azure/main/data.json', {
      params: new HttpParams().set('test', this.packageName)
    })
  }


  search() {
    console.log('Searching for ' + this.packageName);
    // let delayedObservable = Observable.of(this.doSearch()).delay(1000);
    // delayedObservable.subscribe(data => console.log(data));

    this.loading = true;
    this.spinner.show();
    //
    // this.http.get<SearchResult>('https://raw.githubusercontent.com/yonimoses/team9-azure/main/daasta.json', {
    //   params: new HttpParams().set('test', this.packageName)
    // }).pipe(
    //   delay(3000)
    // )
    //   .subscribe(
    //     response => {
    //       console.log('Data available.',response);
    //     },
    //     err => {
    //       console.error(err);
    //     }
    //   )
    //   .add(() => {
    //      this.spinner.hide();
    //
    //     // Do some work after complete...
    //     console.log('At this point the success or error callbacks has been completed.');
    //   });
    //   of(this.doSearch())
    //     .pipe(
    //       delay(1000)
    //     )
    //     .subscribe(
    //       response => {
    //         console.log('Data available.',response.);
    //       },
    //       err => {
    //         console.error(err);
    //       }
    //     )
    // .add(() => {
    //     // Do some work after complete...
    //     console.log('At this point the success or error callbacks has been completed.');
    //   });

    this.http.get<SearchResult>(this.SEARCH_URL + '?packageName=' + this.packageName + '&technology=' + this.technology).subscribe(res => {
      console.log('res: ', res);
      this.wrapper = {
        found: true,
        packageName: this.packageName,
        technology: this.technology,
        result: res
      };
      this.loading = false;

      this.spinner.hide();
    }, error => {
      this.wrapper = {
        found: false,
        technology: this.technology,
        packageName: this.packageName,
        result: null
      };
      this.loading = false;
      this.spinner.hide();
      console.log('error', error);
    });
  }

  technologyChanged($event: any) {
    console.log($event);
    this.technology = $event;
  }
}
