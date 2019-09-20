import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getDataService() {
    const myPromise = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve('Data');
      }, 1500);
    });
    return myPromise;
  }

}
