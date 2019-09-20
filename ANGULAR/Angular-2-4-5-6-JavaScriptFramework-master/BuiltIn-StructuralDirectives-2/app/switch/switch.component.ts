import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
   apply: String = 'red';
  // tslint:disable-next-line:no-inferrable-types
  day: number = 0;

  takeInput(event): void {
    // tslint:disable-next-line:radix
    this.day = parseInt(event.target.value);
  }
}
