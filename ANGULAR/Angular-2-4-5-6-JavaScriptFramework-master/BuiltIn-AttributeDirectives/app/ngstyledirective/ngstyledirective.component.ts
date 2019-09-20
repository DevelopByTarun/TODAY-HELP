import { Component, OnInit, Input } from '@angular/core';
import { Item } from "./model/item";

@Component({
  selector: 'app-ngstyledirective',
  templateUrl: './ngstyledirective.component.html',
  styleUrls: ['./ngstyledirective.component.css']
})
export class NgstyledirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.prepareFirstItem();
    this.prepareSecondItem();
  }

  @Input() myTitle:string;

  itemListFirst:Item[] = [];
  itemListSecond:Item[] = [];

  prepareFirstItem():void {
    this.itemListFirst.push(new Item(101, 'Shoe', 2211, 'Ng Style'));
    this.itemListFirst.push(new Item(102, 'Mobile', 7433, 'Ng Style'));
    this.itemListFirst.push(new Item(103, 'Laptop', 2322, 'Ng Style'));
    this.itemListFirst.push(new Item(104, 'Shoe', 9786, 'Ng Style'));
  }

  prepareSecondItem():void {
    this.itemListSecond.push(new Item(105, 'Macbook', 5478, 'Ng Style'));
    this.itemListSecond.push(new Item(106, 'Ipad', 8698, 'Ng Style'));
    this.itemListSecond.push(new Item(107, 'Shoe', 3412, 'Ng Style'));
    this.itemListSecond.push(new Item(108, 'Television', 9456, 'Ng Style'));
  }

  isColory:boolean = true;
  isBackground:boolean = false;
  isFonty:boolean = true;
  small:number = 15;
  big:number = 25;

  getMultipleStyles(flag:string) {
    var getStyles;
    if(flag == 'one') {
     getStyles = {
      'color': this.isColory ? 'red' : 'blue',
      'font-size.px': !this.isFonty ? this.small : this.big*2,
      'background-color': !this.isBackground ? 'yellow' : 'aquamarine'
     };
    }
    else {
      getStyles = {
      'color': !this.isColory ? 'red' : 'blue',
      'font-size.px': this.isFonty ? this.small*2 : this.big,
      'background-color': this.isBackground ? 'yellow' : 'aqua'
     };
    }
    return getStyles;
  }

}
