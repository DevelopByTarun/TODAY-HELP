import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive-usage',
  templateUrl: './custom-structural-directive-usage.component.html',
  styleUrls: ['./custom-structural-directive-usage.component.css']
})
export class CustomStructuralDirectiveUsageComponent implements OnInit {

  constructor() {
    this.isFonty = true;
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  // for myif directive

  showView:boolean;
  isFonty:boolean;

  toggleShowView() {
    this.showView = !this.showView;
  }

  hasView:boolean;

  checkHasView(flag:boolean) {
    this.hasView = flag;
  }

  // for myifelse directive

  view:boolean

  getValidView() {
    this.view = true;
  }

  getInvalidView() {
    this.view = false;
  }

  // for myloop directive

  myloopview:boolean;
  myloopnum:number;

  getValidLoopView() {
    this.myloopview = true;
    this.myloopnum = 5;
  }

  getInvalidLoopView() {
    this.myloopview = false;
    this.myloopnum = 8;
  }

  // for mysettimeout directive

  timeoutView:boolean;
  timeoutDelay:number;
  timeoutLoop:number;

  getDelayLoopTimeout(view:boolean, delay:number, lop:number) {
    this.timeoutView = view;
    this.timeoutDelay = delay;
    this.timeoutLoop = lop;
  }

}
