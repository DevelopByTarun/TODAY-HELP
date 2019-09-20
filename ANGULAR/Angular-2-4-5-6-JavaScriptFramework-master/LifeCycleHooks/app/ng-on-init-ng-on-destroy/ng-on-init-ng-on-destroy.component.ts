import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-on-init-ng-on-destroy',
  templateUrl: './ng-on-init-ng-on-destroy.component.html',
  styleUrls: ['./ng-on-init-ng-on-destroy.component.css']
})
export class NgOnInitNgOnDestroyComponent implements OnInit, OnDestroy {

  constructor() {
    this.counter = 0;
    this.colorFlag = true;
    this.family = 5;
  }

  @Input('head') myHeading:string;
  colorFlag:boolean;
  family:number;

  getMultipleStyles(flag:string) {
    let myStyles;
    if (flag == 'resolve') {
      myStyles = {
        'color': this.colorFlag? 'red': 'green',
        'font-family': this.family > 10? 'monospaced':'arialblack'
      };
    }
    else {
      myStyles = {
        'color': !this.colorFlag? 'brown': 'green',
        'font-family': this.family < 10? 'monospaced':'arialblack'
      };
    }
    return myStyles;
  }

  counter:number;
  intervalId:any;
  initMessage:string;
  destroyMessage:string;

  startCounter() {
    this.intervalId = setInterval(()=> {
      this.counter = this.counter + 1;
    }, 1000);
  }

  ngOnInit() {
    this.startCounter();
    console.log('Start Counter');
    this.initMessage = 'Start Counter';
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('Stop Counter');
    this.destroyMessage = 'Stop Counter';
  }

}
