import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: String = '';
  message: String = 'hello angular 2';
  name: String = '';
  h1: String = 'h1_align';
  h2: String = 'h2';
  userid: String = '';
  password: String = '';
  a: String = 'plus';
  s: String = 'minus';
  // tslint:disable-next-line:no-inferrable-types
  firstno: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  secondno: number = 0;

  takeInput(event): void {
    const result = event.target.value;
    this.data = result;
  }

  takeFirstno(event): void {
    const num1 = event.target.value;
    this.firstno = num1;
  }

  takeSecondno(event): void {
    const num2 = event.target.value;
    this.secondno = num2;
  }
}
