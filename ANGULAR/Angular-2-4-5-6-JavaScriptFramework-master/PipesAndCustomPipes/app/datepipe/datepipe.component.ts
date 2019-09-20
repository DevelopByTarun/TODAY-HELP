import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {

  constructor() {
    this.toggleDate = true;
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  @Input('prop2') myProp2:string;

  @Input('prop3') myProp3:string;

  @Input('prop4') myProp4:string;

  currentDate = new Date();

  toggleDate:boolean;

  format() {
    if(this.toggleDate) {
      return 'shortDate';
    }
    else {
      return 'fullDate'
    }
  }

  toggle() {
    this.toggleDate = !this.toggleDate;
  }

}
