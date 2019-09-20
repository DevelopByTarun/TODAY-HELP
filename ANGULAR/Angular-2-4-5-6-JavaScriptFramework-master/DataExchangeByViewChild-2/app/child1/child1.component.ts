import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {

  constructor() {
    this.counter = 0;
    this.message = 0;
  }

  ngOnInit() {
  }

  // accessind through app component
  counter:number;
  message:number;

  setIncrement() {
    this.counter = this.counter + 1;
    this.message = this.counter;
  }

  setDecrement() {
    this.counter = this.counter - 1;
    this.message = this.counter;
  }

}
