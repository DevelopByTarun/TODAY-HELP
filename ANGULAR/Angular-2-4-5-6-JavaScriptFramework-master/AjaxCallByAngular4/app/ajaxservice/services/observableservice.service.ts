import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../../product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ObservableserviceService {

  private http:Http;

  constructor(http:Http) {
    this.http = http;
    this.url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
  }

  url:string;

  getProductsFromServer():Observable<Product[]> {
    return this.http.get(this.url).map((response)=> {
      return response.json().mobiles as Product[];
    }).catch(this.getHandleErrorObservable);
  }

  private getHandleErrorObservable(error:any):Observable<any> {
    return Observable.throw(error.message || error);
  }

}
