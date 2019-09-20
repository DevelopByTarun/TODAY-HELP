import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  x:number;
  y:number;

  setValues(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  getAddValues() {
    return this.x + this.y;
  }

}
