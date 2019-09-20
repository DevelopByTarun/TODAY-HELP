import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.css']
})
export class SecondformComponent implements OnInit {

  modeluid: String;
  modelpwd: String;
  modelemal: String;

  constructor() { }

  formSubmit(loginfm) {
    if (loginfm.isInvalid) {
      console.log('Invalid Form....!!');
      return;
    }
    console.log('Form Submit....!!', loginfm);
  }

  getReset() {
    this.modeluid = '';
    this.modelpwd = '';
    this.modelemal = '';
  }

  ngOnInit() {
  }

}
