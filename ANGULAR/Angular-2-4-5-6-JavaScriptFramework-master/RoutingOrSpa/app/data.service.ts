import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
    this.data = '';
  }

  data:string;

  public setData(data:string):void {
    this.data = data;
  }

  public getData() {
    return this.data;
  }

}
