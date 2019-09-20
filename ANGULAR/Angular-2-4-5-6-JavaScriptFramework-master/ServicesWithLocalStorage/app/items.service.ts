import { Injectable } from '@angular/core';
import {Item} from './item';
import {Itemcrud} from './itemcrud';

@Injectable()
export class ItemsService implements Itemcrud{

  constructor() { }

  items:Item[] = [];
  itemRecord:string;

  addItem(id:number, name:string, price:number, desc:string) {
    var item = new Item(id, name, price, desc);
    this.items.push(item);
  }

  saveItemToLocalStorage() {
    localStorage.setItem(this.itemRecord, JSON.stringify(this.items));
  }

  loadItemsFromLocalStorage() {
    return this.items = JSON.parse(localStorage.getItem(this.itemRecord));
  }

  deleteItemFromLocalStorage() {
    localStorage.removeItem(this.itemRecord);
  }

}
