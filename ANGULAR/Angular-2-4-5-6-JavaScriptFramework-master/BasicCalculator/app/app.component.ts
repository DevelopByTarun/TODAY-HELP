import { Component } from '@angular/core';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Calculator';
  // tslint:disable-next-line:no-inferrable-types
  firstNumber: number = 0;
  // tslint:disable-next-line:no-inferrable-types
  secondNumber: number = 0;
  result: number;

  takeInputOne(event): void {
    // tslint:disable-next-line:radix
    this.firstNumber = parseInt(event.target.value);
  }
  takeInputTwo(event): void {
    // tslint:disable-next-line:radix
    this.secondNumber = parseInt(event.target.value);
  }

}
