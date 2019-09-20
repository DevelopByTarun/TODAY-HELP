import { Injectable } from '@angular/core';
import {Calcmethods} from './calcmethods';

@Injectable()
export class CalcService implements Calcmethods {

  constructor() { }

  addition(x:number, y:number):number {
    return x + y;
  }

  subtraction(x:number, y:number):number {
    return x - y;
  }

  multiplication(x:number, y:number):number {
    return x * y;
  }

  division(x:number, y:number):number {
    return x / y;
  }

}
