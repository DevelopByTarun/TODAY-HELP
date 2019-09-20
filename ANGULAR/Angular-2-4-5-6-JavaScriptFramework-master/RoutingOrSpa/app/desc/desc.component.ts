import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalculatorService } from '../calculator.service';


@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {

  constructor(active:ActivatedRoute, calc:CalculatorService) {
    this.active = active;
    this.calc = calc;
    this.title = 'This Title Is Change Through Route Param';
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }

  ngOnInit() {
  }

  title:string;
  firstNumber:number;
  secondNumber:number;
  result:number;

  private active:ActivatedRoute;
  private calc:CalculatorService;

  getDescriptionRouteParam() {
    this.active.params.subscribe((param)=> {
      this.title = param.title;
    });
  }

  takeFirstNumber(event) {
    var num = parseInt(event.target.value);
    this.firstNumber = num;
  }

  takeSecondNumber(event) {
    var num = parseInt(event.target.value);
    this.secondNumber = num;
  }

  forAdd() {
    this.result = this.calc.addition(this.firstNumber, this.secondNumber);
  }

  forMinus() {
    this.result = this.calc.subtraction(this.firstNumber, this.secondNumber);
  }

  forMultiply() {
    this.result = this.calc.multiplication(this.firstNumber, this.secondNumber);
  }

  forDivide() {
    this.result = this.calc.division(this.firstNumber, this.secondNumber);
  }

}
