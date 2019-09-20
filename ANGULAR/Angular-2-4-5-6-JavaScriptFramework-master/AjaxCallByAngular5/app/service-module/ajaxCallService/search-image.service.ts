import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../../image';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchImageService {

  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  getImagesFromGiphyServer(search):Observable<Image[]> {
    let url = 'http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&limit=10';
    return this.httpClient.get<Image[]>(url);
  }

}
