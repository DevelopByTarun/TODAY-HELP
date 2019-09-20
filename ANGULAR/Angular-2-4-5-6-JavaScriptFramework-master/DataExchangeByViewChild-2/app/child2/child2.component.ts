import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() {
    this.counter = 0;
    this.shouldRun = false;
  }

  ngOnInit() {
  }

  counter:number;
  shouldRun:boolean;

  setStart() {
    this.shouldRun = true;
    let interval = setInterval(()=> {
      if(this.shouldRun === false) {
        clearInterval(interval);
      }
      this.counter = this.counter + 1;
    }, 700);
  }

  setStop() {
    this.shouldRun = false;
  }

}
