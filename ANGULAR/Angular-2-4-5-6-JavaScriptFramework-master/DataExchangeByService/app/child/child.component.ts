import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(calc:CalcService) { 
    this.calc = calc;
  }

  ngOnInit() {
  }

  calc:CalcService;

  x:number;
  y:number;

  takeFirst(event) {
    let first = parseInt(event.target.value);
    this.x = first;
  }

  takeSecond(event) {
    let second = parseInt(event.target.value);
    this.y = second;
  }

  callCalcService() {
    this.calc.setValues(this.x, this.y);
  }

}
