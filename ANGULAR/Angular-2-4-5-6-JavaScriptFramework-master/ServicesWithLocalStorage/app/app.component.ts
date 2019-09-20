import { Component } from '@angular/core';
import { ItemsService } from './items.service';
import { Item } from './item';
import {CalcService} from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private itemsService:ItemsService;
  private calcService:CalcService;

  constructor(itemsService:ItemsService, calcService:CalcService) {
    this.itemsService = itemsService;
    this.title = 'Create Services In Angular 2/4/5';
    this.subtitle1 = 'Item Crud With Service And LocalStorage';
    this.isRequired = true;
    this.calcService = calcService;
    this.subtitle2 = 'Basic Calculator With Service';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }

  title:string;
  subtitle1:string;
  subtitle2:string;

  // for items service
  id:number;
  name:string;
  price:number;
  desc:string;
  isRequired:boolean;

  items:Item[] = [];

  takeId(event):void {
    let ids = parseInt(event.target.value);
    this.id = ids;
  }

  takeName(event):void {
    let nm = event.target.value;
    this.name = nm;
  }

  takePrice(event):void {
    let pcr = parseInt(event.target.value);
    this.price = pcr;
  }

  takeDesc(event):void {
    let des = event.target.value;
    this.desc = des;
  }

  forAddItem() {
    this.itemsService.addItem(this.id, this.name, this.price, this.desc);
    console.log("Item Added Successfully");
    window.alert("Item Added Successfully");
  }

  forStoreItemToLocalStorage() {
    this.itemsService.saveItemToLocalStorage();
    console.log("Item Store In LocalStorage Successfully");
    window.alert("Item Store In LocalStorage Successfully");
  }

  forLoadItemsFromLocalStorage() {
    this.items = this.itemsService.loadItemsFromLocalStorage();
  }

  forDeleteItemFromLocalStorage() {
    this.itemsService.deleteItemFromLocalStorage();
    this.items.length = 0;
    console.log("Item Remove From LocalStorage Successfully");
    window.alert("Item Remove From LocalStorage Successfully");
  }

  // for calc service
  firstNumber:number;
  secondNumber:number;
  result:number;

  takeFirstNumber(event):void {
    let first = parseInt(event.target.value);
    this.firstNumber = first;
  }

  takeSecondNumber(event):void {
    let second = parseInt(event.target.value);
    this.secondNumber = second;
  }

  forAdd() {
    this.result = this.calcService.addition(this.firstNumber, this.secondNumber);
  }

  forSubtract() {
    this.result = this.calcService.subtraction(this.firstNumber, this.secondNumber);
  }

  forMultiply() {
    this.result = this.calcService.multiplication(this.firstNumber, this.secondNumber);
  }

  forDivide() {
    this.result = this.calcService.division(this.firstNumber, this.secondNumber);
  }

}
