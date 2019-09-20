import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 4000);
    });
    return resultPromise;
  }
}
