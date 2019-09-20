import { Injectable } from '@angular/core';
import { CalcService } from './calc.service';

@Injectable()
export class AppService {
  private items: Item[] = [];
  private calcService: CalcService;

  constructor(calcService: CalcService) {
    this.calcService = calcService;
  }
  private prepareItems() {
    for(let i = 1; i <= 10; i++) {
      const itemObj = new Item(i, 'Samsung A'+i, 9000 + i, 'this is Samsung');
      this.items.push(itemObj);
    }
  }
  public getAdd() {
    return this.calcService.add(1000, 2000);
  }
  public getSubtract() {
    return this.calcService.subtract(1000, 2000);
  }
  public getMultiply() {
    return this.calcService.multiply(1000, 2000);
  }
  public getDivide() {
    return this.calcService.divide(1000, 2000);
  }

  public getItems() {
    this.prepareItems();
    return this.items;
  }
}

export class Item {
  public id: number;
  public name: String;
  public price: number;
  public desc: String;

  constructor(id: number, name: String, price: number, desc: String) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
  }
}