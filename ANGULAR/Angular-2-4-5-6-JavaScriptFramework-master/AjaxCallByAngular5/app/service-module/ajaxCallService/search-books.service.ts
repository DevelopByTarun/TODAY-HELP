import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Book} from '../../book';
import { Http } from '@angular/http';
// import { Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// for complete rxjs object
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchBooksService {

  private httpClient:HttpClient;
  private http:Http;

  constructor(httpClient:HttpClient, http:Http) {
    this.httpClient = httpClient;
    this.http = http;
  }

  url:string;

  getAllBooksFromServer():Observable<Book[]> {
    this.url = 'https://raw.githubusercontent.com/DevelopByTarun/Angular-2-4-5/master/AjaxCallByAngular5WithSearchAndFilter/books.json';
    return this.httpClient.get<Book[]>(this.url);
  }

  filterBooksByCategoryAndYearFromServer(category:string, year:string):Observable<Book[]> {
    this.url = 'https://raw.githubusercontent.com/DevelopByTarun/Angular-2-4-5/master/AjaxCallByAngular5WithSearchAndFilter/books.json';
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Accept', 'application/json');
    return this.httpClient.get<Book[]>(this.url + '?category='+category + '&year='+year, {
      headers:httpHeaders,
      responseType: 'json'
    });
  }

}
