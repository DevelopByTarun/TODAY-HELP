import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'app-dataapp',
  templateUrl: './dataapp.component.html',
  styleUrls: ['./dataapp.component.css']
})
export class DataappComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // noinspection TsLint
  @Input() head:string;

  @Input() colory: Array<String>;

  getDataThroughTemplateReference(userid:string, password:string, mobile:number, emaily:string) {
    console.log("Userid Is :: "+userid);
    console.log("Password Is :: "+password);
    console.log("MobileNo Is :: "+mobile);
    console.log("Email Is :: "+emaily);
  }

  getSelectedColor(val) {
    console.log("Selected Color Is :: "+val);
  }

}
