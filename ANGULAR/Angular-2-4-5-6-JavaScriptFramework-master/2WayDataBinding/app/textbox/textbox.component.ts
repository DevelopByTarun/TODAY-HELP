import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title2:string = '2 Way Data Binding With NgModel';
  isReq:boolean = false;
  message:string = '';
  isSize:boolean = true;
  small:number = 20;
  big:number = 30;
  firstNo:number = 0;
  // secondNo:number = 0;

  takeInput(event) {
    var value = event.target.value;
    this.firstNo = value;
  }

}
