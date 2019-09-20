import { Component, OnInit } from '@angular/core';
import { ItemModal } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList = new Array<ItemModal>();

  ngOnInit() {
    this.prepareItems();
  }

  private prepareItems(): void {
    for (let i = 0; i <= 10; i++) {
      // tslint:disable-next-line:prefer-const
      let itemObject = new ItemModal(i, 'Apple' + i, 1000 + i * 2, 'This is Desc', 'giphy250.gif');
      this.itemList.push(itemObject);
    }
  }

}
