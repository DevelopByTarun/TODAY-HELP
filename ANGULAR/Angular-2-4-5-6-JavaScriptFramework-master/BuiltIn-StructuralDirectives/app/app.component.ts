import { Component, OnInit } from '@angular/core';
import { Item } from './model/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
    this.isColor = false;
    this.isBackground = true;
    this.colory = ['red', 'black', 'blue', 'orange', 'aqua', 'cyan', 'green', 'purple', 'forestgreen', 'yellow', 'yellowgreen', 'aquamarine'];
    this.selectedColor = 'black';
    this.fruits = ['apple', 'orange', 'banana', 'pineapple', 'watermelon', 'grapes', 'litches'];
    this.isShow = true;
    this.isTemplate = true;
  }

  ngOnInit() {
    this.prepareItem();
  }

  // for title style
  title:string = 'Built In Structural Directives In Angular 2/4/5';
  isColor:boolean;
  isBackground:boolean;
  getStyles(flag:string) {
    let myStyle;
    if(flag == 'yes') {
      myStyle = {
        'color': this.isColor ? 'red' : 'white',
        'background-color': this.isBackground ? 'black' : 'white'
      };
    }
    return myStyle;
  }

 // for hidden
  isShow:boolean;
  toggleShow() {
    this.isShow = !this.isShow;
  }
  
  // itemList = new Array<Item>();
  itemList:Item[] = [];

  prepareItem():void {
    this.itemList.push(new Item(101, 'Shoe', 2211, 'https://images-eu.ssl-images-amazon.com/images/I/61-hh95RgVL._SL150_.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(102, 'laptop', 74333, 'https://www.nordblanc.com/files/product/51/11/125525/small.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(103, 'mobile', 23243, 'https://cdn.shopify.com/s/files/1/2470/0954/products/women-and-men-shoes-original-new-arrival-official-nike-air-max-plus-tn-ultra-3m-men-s-breathable-running-shoes-sports-sneakers-1523722846236_150x150.jpg?v=1511575387', 'Ng Class With Object'));
    this.itemList.push(new Item(104, 'playstation', 94887, 'http://static6.industrybuying.com/products_mini/safety/safety-shoes/SA.SA32.212394_2.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(105, 'Shoe', 5478, 'http://mycomfortshoesshop.com/wp-content/uploads/2017/04/adidas-NEO-Mens-Cloudfoam-VS-City-Shoes-0-5-150x150.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(106, 'television', 83698, 'https://canvas-shoes.buytra.com/sites/default/files/styles/latest_front_150/public/newwear-main-images/17-08-29/eleven-high-top-sneakers-for-men-stranger-things-canvas-shoes-147476.jpg?itok=e8vj2wzd', 'Ng Class With Object'));
    this.itemList.push(new Item(107, 'macbook', 31412, 'http://cdn.iofferphoto.com/img/item/643/095/474/g_supreme-air-more-uptempo-suptempo-mens-shoes-us-7-to-12-e014.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(108, 'Shoe', 4400, 'https://images-eu.ssl-images-amazon.com/images/I/61-hh95RgVL._SL150_.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(109, 'Shoe', 7433, 'https://www.nordblanc.com/files/product/51/11/125525/small.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(110, 'mobile', 54322, 'https://cdn.shopify.com/s/files/1/2470/0954/products/women-and-men-shoes-original-new-arrival-official-nike-air-max-plus-tn-ultra-3m-men-s-breathable-running-shoes-sports-sneakers-1523722846236_150x150.jpg?v=1511575387', 'Ng Class With Object'));
    this.itemList.push(new Item(111, 'ipad', 94156, 'http://static6.industrybuying.com/products_mini/safety/safety-shoes/SA.SA32.212394_2.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(112, 'Shoe', 35478, 'http://mycomfortshoesshop.com/wp-content/uploads/2017/04/adidas-NEO-Mens-Cloudfoam-VS-City-Shoes-0-5-150x150.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(113, 'xbox', 834698, 'https://canvas-shoes.buytra.com/sites/default/files/styles/latest_front_150/public/newwear-main-images/17-08-29/eleven-high-top-sneakers-for-men-stranger-things-canvas-shoes-147476.jpg?itok=e8vj2wzd', 'Ng Class With Object'));
    this.itemList.push(new Item(114, 'joystick', 53412, 'http://cdn.iofferphoto.com/img/item/643/095/474/g_supreme-air-more-uptempo-suptempo-mens-shoes-us-7-to-12-e014.jpg', 'Ng Class With Object'));
  }
  
  // for second part of ng-template
  colory: Array<string>;

  selectedColor:string;

  fruits: Array<string>;

  isTemplate:boolean;

}

