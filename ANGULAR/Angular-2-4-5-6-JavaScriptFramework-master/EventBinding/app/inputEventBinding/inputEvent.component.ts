import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputevent',
  templateUrl: './inputEvent.component.html',
  styleUrls: ['../app.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class InputEventBinding {

  @Input()
  head: string;

  @Input()
  title: string;

  firstNo: number = 0;
  secondNo: number = 0;

  takeFirstNo(event) {
    const first = event.target.value;
    this.firstNo = first;
  }
}
