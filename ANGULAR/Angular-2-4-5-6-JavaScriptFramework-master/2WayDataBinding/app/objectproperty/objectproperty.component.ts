import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objectproperty',
  templateUrl: './objectproperty.component.html',
  styleUrls: ['./objectproperty.component.css']
})
export class ObjectpropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() myTitle:string;

  @Input() myName:string;

  @Input() myCity:string;

  @Output() myNameChange = new EventEmitter<string>();

  @Output() myCityChange = new EventEmitter<string>();

  changeCase(val:string):void {
    if(val == 'upper') {
      this.myName = this.myName.toUpperCase();
      this.myCity = this.myCity.toUpperCase();
    }
    else {
      this.myName = this.myName.toLowerCase();
      this.myCity = this.myCity.toLowerCase();
    }
    this.myNameChange.emit(this.myName);
    this.myCityChange.emit(this.myCity);
  }

}
