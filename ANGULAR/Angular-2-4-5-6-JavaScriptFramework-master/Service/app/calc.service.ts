import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }

  add(x: number, y: number) {
    return x + y;
  }
  subtract(x: number, y: number) {
    return x - y;
  }
  multiply(x: number, y: number) {
    return x * y;
  }
  divide(x: number, y: number) {
    return x / y;
  }
}