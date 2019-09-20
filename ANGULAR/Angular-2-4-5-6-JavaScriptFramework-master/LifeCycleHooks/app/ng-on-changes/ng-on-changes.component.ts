import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnChanges {

  constructor() { }

  @Input('head') myHead:string;

  @Input('employeeObject') myEmployeeObject:Employee;

  @Input('msg') myMsg:string;

  allMsgChangeLogs:string[] = [];

  allEmployeeObjectChangeLogs:string[] = [];

  ngOnChanges(changes:SimpleChanges) {
    for(let propName in changes) {
      let change = changes[propName];
      let currentVal = JSON.stringify(change.currentValue);
      let previousVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}:  currentValue = ${currentVal},  previousValue = ${previousVal}`;
      if (propName === 'myEmployeeObject') {
        this.allEmployeeObjectChangeLogs.push(changeLog);
      }
      else if (propName === 'myMsg') {
        this.allMsgChangeLogs.push(changeLog);
      }
    }
  }

}
