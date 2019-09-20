import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../../product';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class PromiseserviceService {

  private http:Http;

  constructor(http:Http) {
    this.http = http;
    this.url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
  }

  // get products from server
  url:string;

  getProductsFromServer():Promise<Product[]> {
    return this.http.get(this.url).toPromise().then((response)=> {
      return response.json().mobiles as Product[];
    }).catch(this.getHandleErrorPromise);
  }

  private getHandleErrorPromise(error:any):Promise<any> {
    return Promise.reject(error.message || error);
  }

  // get products local
  productList:Product[] = [];

  getPrepareproducts():Product[] {
    for(let i = 0; i <= 4; i++) {
      this.productList.push(new Product(i,'Apple'+i,9000+i,'https://staticshop.o2.co.uk/product/images/iphone_se_16gb_rose_gold_header.png?cb=28d7f5d2987a5964f7cd0ea7f5204419'));
    }
    return this.productList;
  }

  getProductsFromLocalServer():Promise<Product[]> {
    let url = '';
    return Promise.resolve(this.getPrepareproducts());
  }

}
