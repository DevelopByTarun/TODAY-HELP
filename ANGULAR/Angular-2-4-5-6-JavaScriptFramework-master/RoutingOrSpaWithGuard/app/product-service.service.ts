import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';  // angular5 server call style

@Injectable()
export class ProductServiceService {

  constructor(private httpClient: HttpClient) { }

  fetchProducts() {
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    return this.httpClient.get<Product[]>(url);  // publish to server
  }
}
