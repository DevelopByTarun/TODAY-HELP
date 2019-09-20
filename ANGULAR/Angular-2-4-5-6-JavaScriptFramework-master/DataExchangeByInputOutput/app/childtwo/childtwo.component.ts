import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {

  constructor() {
    this.isColor = true;
    this.county = 0;
  }

  ngOnInit() {
  }

  isColor:boolean;

  @Input() head:string;

  @Output() increaseFunction = new EventEmitter<number>();

  @Output() decreaseFunction = new EventEmitter<number>();

  county:number;

  passValueToParentForIncrement() {
    this.increaseFunction.emit(this.county++);
  }

  passValueToParentForDecrement() {
    this.decreaseFunction.emit(this.county--);
  }

}
