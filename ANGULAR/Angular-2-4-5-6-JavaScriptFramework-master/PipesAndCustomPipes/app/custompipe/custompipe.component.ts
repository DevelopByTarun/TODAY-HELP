import {Component, Input, OnInit} from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})

export class CustompipeComponent implements OnInit {

  constructor() {
    this.name = 'TarunParve';
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  @Input('prop2') myProp2:string;

  @Input('prop3') myProp3:string;

  @Input('prop4') myProp4:string;

  // for portion pipe
  name:string;

  // for exponential strength
  power = 5;
  factor = 1;

  // for myjson pipe
  employee = new Employee(1001, 'TarunParve', 32, 'Sydney');

}
