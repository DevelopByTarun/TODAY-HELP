import { Component } from '@angular/core';

// for data exchange from child1 and child2
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string;
  title2:string;
  title4:string;
  title5:string;
  result:number;

  constructor() {
    this.title = 'Communication between Components Through @ViewChild In Angular 2/4/5';
    this.title2 = '@ViewChild Using Component';
    this.title4 = 'Counter Example';
    this.title5 = 'StopWatch Example';
    this.result = 20;
  }

  // for child1
  @ViewChild(Child1Component)
  child:Child1Component;

  getIncrement() {
    this.child.setIncrement();
  }

  getDecrement() {
    this.child.setDecrement();
  }

  // for child2
  @ViewChild(Child2Component)
  child2:Child2Component;

  getStart() {
    this.child2.setStart();
  }

  getStop() {
    this.child2.setStop();
  }
}
