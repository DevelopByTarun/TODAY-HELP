import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('propArray') myPropArray:Array<string>;

  getPropArray:Array<string>;

}
