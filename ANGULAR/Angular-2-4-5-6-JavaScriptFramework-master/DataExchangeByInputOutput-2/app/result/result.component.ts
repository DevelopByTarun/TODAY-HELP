import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  one: String = 'm';
  two: String = 'n';
  three: String = 'r';

  // tslint:disable-next-line:member-ordering
  @Input()
  msg: String = '';
  // tslint:disable-next-line:member-ordering
  @Input()
  // tslint:disable-next-line:no-inferrable-types
  fnumber: number = 0;
  // tslint:disable-next-line:member-ordering
  @Input()
  // tslint:disable-next-line:no-inferrable-types
  calcResult: number = 0;

  // tslint:disable-next-line:member-ordering
  @Output()
  parentMethod = new EventEmitter<number>();

  shareChildToParent(): void {        // call parent method shareToChild
    this.parentMethod.emit(10);
  }
}
