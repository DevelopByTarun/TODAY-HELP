import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  public addition(x:number, y:number) {
    return x + y;
  }

  public subtraction(x:number, y:number) {
    return x - y;
  }

  public multiplication(x:number, y:number) {
    return x * y;
  }

  public division(x:number, y:number) {
    return x / y;
  }

}
