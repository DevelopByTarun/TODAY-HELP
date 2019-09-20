import { Component, OnInit, Input } from '@angular/core';
import { Item } from "./model/item";

@Component({
  selector: 'app-ngclassdirective',
  templateUrl: './ngclassdirective.component.html',
  styleUrls: ['./ngclassdirective.component.css']
})
export class NgclassdirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.prepareItem();
  }

  @Input() myTitle:string;

  // itemList = new Array<Item>();
  itemList:Item[] = [];

  prepareItem():void {
    this.itemList.push(new Item(101, 'Shoe', 2211, 'https://images-eu.ssl-images-amazon.com/images/I/61-hh95RgVL._SL150_.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(102, 'Shoe', 7433, 'https://www.nordblanc.com/files/product/51/11/125525/small.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(103, 'Shoe', 2322, 'https://cdn.shopify.com/s/files/1/2470/0954/products/women-and-men-shoes-original-new-arrival-official-nike-air-max-plus-tn-ultra-3m-men-s-breathable-running-shoes-sports-sneakers-1523722846236_150x150.jpg?v=1511575387', 'Ng Class With Object'));
    this.itemList.push(new Item(104, 'Shoe', 9456, 'http://static6.industrybuying.com/products_mini/safety/safety-shoes/SA.SA32.212394_2.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(105, 'Shoe', 5478, 'http://mycomfortshoesshop.com/wp-content/uploads/2017/04/adidas-NEO-Mens-Cloudfoam-VS-City-Shoes-0-5-150x150.jpg', 'Ng Class With Object'));
    this.itemList.push(new Item(106, 'Shoe', 8698, 'https://canvas-shoes.buytra.com/sites/default/files/styles/latest_front_150/public/newwear-main-images/17-08-29/eleven-high-top-sneakers-for-men-stranger-things-canvas-shoes-147476.jpg?itok=e8vj2wzd', 'Ng Class With Object'));
    this.itemList.push(new Item(107, 'Shoe', 3412, 'http://cdn.iofferphoto.com/img/item/643/095/474/g_supreme-air-more-uptempo-suptempo-mens-shoes-us-7-to-12-e014.jpg', 'Ng Class With Object'));
  }

  getCssClassesByComponentMethod(flag:string) {
    var getClasses;
    if(flag == 'right') {
      getClasses = {
        'compone': true,
        'comptwo': true
      };
    }
    else {
      getClasses = {
        'compone': false,
        'comptwo': false
      };
    }
    return getClasses;
  }

}
