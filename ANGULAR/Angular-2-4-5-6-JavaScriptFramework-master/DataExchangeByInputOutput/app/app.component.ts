import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title1:string = 'Parent Child Communication In Angular 2/4/5';

  // for childone component
  title2:string = 'Child One Component';

  result:number;

  addition(cal):void {
    this.result = cal.firstNumber + cal.secondNumber;
  }

  subtraction(cal):void {
    this.result = cal.firstNumber - cal.secondNumber;
  }

  multiplication(cal):void {
    this.result = cal.firstNumber * cal.secondNumber;
  }

  division(cal):void {
    this.result = cal.firstNumber / cal.secondNumber;
  }

  // for childtwo component
  title3:string = 'Child Two Component';
  counter:number = 0;

  increment(count:number) {
    this.counter = count;
  }

  decrement(count:number) {
    this.counter = count;
  }

}
