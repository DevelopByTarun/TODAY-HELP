import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-slicepipe',
  templateUrl: './slicepipe.component.html',
  styleUrls: ['./slicepipe.component.css']
})
export class SlicepipeComponent implements OnInit {

  constructor() {
    this.fruits = ['Apple', 'Banana', 'Watermelon', 'Orange', 'Grapes', 'Peaches'];
    this.words = 'abcdefghijklmnopqrstuvwxyz';
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  @Input('prop2') myProp2:string;

  @Input('prop3') myProp3:string;

  fruits:Array<string>;

  words:string;

}
