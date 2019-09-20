import { window } from 'rxjs/operator/window';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {

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
