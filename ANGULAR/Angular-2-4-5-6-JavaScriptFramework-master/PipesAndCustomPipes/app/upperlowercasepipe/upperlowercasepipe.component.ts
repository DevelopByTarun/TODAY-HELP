import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upperlowercasepipe',
  templateUrl: './upperlowercasepipe.component.html',
  styleUrls: ['./upperlowercasepipe.component.css']
})
export class UpperlowercasepipeComponent implements OnInit {

  constructor() {
    this.subtitle1 = 'Uppercase Pipe Demo';
    this.message = 'This Message Is Belongs From Uppercase Pipe';
    this.showMsg = 'null';
    this.subtitle2 = 'Lowercase Pipe Demo';
    this.message2 = 'Null';
  }

  ngOnInit() {
  }

  // for uppercase pipe
  subtitle1:string;

  message:string;

  officeObject = {
    office: 'Auckland',
    corpOffice: 'Sydney'
  };

  showMsg:string;

  takeInput(event) {
    let m = event.target.value;
    this.showMsg = m;
  }

  // for lowercase
  subtitle2:string;

  address = {
    homeAddress: 'NewDelhi',
    officeAddress: 'WashingtonDc'
  };

  message2:string

  showData(data:string) {
    this.message2 = data;
  }

}
