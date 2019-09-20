import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Calculator } from './Calculator';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  constructor() {
    this.isColor = true;
  }

  ngOnInit() {
  }

  isColor:boolean;

  @Input() head:string;

  @Output() plusFunction = new EventEmitter<Calculator>();

  @Output() minusFunction = new EventEmitter<Calculator>();

  @Output() multiplyFunction = new EventEmitter<Calculator>();

  @Output() divideFunction = new EventEmitter<Calculator>();


  // noinspection TypeScriptValidateTypes
  calc = new Calculator();

  takeFirstNumber(event) {
    var value = parseInt(event.target.value);
    this.calc.firstNumber = value;
  }

  takeSecondNumber(event) {
    var value = parseInt(event.target.value);
    this.calc.secondNumber = value;
  }

  passValueToParentForAddition() {
    this.plusFunction.emit(this.calc);
  }

  passValueToParentForSubtraction() {
    this.minusFunction.emit(this.calc);
  }

  passValueToParentForMultiplication() {
    this.multiplyFunction.emit(this.calc);
  }

  passValueToParentForDivision() {
    this.divideFunction.emit(this.calc);
  }

}
