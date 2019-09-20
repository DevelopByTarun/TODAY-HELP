import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to data exchange between components';
  message: String = 'Calc Result Is ::';
  // tslint:disable-next-line:no-inferrable-types
  firstnumber: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  secondnumber: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  result: number = 0;

  takeFirstNumber(event) {
    // tslint:disable-next-line:radix
    this.firstnumber = parseInt(event.target.value);
  }
  takeSecondNumber(event) {
    // tslint:disable-next-line:radix
    this.secondnumber = parseInt(event.target.value);
  }
  addition(): void {
    this.result = this.firstnumber + this.secondnumber;
  }
  subtraction(): void {
    this.result = this.firstnumber - this.secondnumber;
  }
  multiplication(): void {
    this.result = this.firstnumber * this.secondnumber;
  }
  division(): void {
    this.result = this.firstnumber / this.secondnumber;
  }
  shareToChild(x: number): void {
    this.firstnumber = this.firstnumber * x;
  }
}
