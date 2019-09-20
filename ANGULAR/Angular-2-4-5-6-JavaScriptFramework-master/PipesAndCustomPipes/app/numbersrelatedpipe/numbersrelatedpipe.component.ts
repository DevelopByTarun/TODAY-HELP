import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-numbersrelatedpipe',
  templateUrl: './numbersrelatedpipe.component.html',
  styleUrls: ['./numbersrelatedpipe.component.css']
})
export class NumbersrelatedpipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  @Input('prop2') myProp2:string;

  @Input('prop3') myProp3:string;

  @Input('prop4') myProp4:string;

  // for decimal
  num1: number = 12.638467846;
  num2: number = 0.5;

  // for percent
  num3: number = 2.5;
  num4: number = 0.5;

  // for currency
  cur1: number = 0.25;
  cur2: number = 10.263782;

}
