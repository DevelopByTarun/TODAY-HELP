import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [LogicService]
})
export class ButtonComponent {

  @Input()
  // tslint:disable-next-line:no-inferrable-types
  fnumber: number = 0;
  @Input()
  // tslint:disable-next-line:no-inferrable-types
  snumber: number = 0;
  result: number;
  service: LogicService;

  constructor(service: LogicService) {
    this.service = service;
  }

  getAdd(): void {
    this.result = this.service.add(this.fnumber, this.snumber);
  }
  getSubtract(): void {
    this.result = this.service.subtract(this.fnumber, this.snumber);
  }
  getMultiply(): void {
    this.result = this.service.multiply(this.fnumber, this.snumber);
  }
  getDivide(): void {
    this.result = this.service.divide(this.fnumber, this.snumber);
  }
}
