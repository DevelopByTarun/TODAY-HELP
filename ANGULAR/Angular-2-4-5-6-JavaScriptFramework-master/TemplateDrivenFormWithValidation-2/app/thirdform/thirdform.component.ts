import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirdform',
  templateUrl: './thirdform.component.html',
  styleUrls: ['./thirdform.component.css']
})
export class ThirdformComponent implements OnInit {

  modeluid: String;
  modelpwd: String;
  modelemal: String;
  modelddown: String;

  submitted = false;

  constructor() { }

  formSubmit(loginfm) {
    if (loginfm.isInvalid) {
      console.log('Invalid Form....!!');
      return;
    }
    console.log('Form Submit....!!', loginfm);
    this.submitted = true;
  }

  getReset() {
    this.modeluid = '';
    this.modelpwd = '';
    this.modelemal = '';
    this.modelddown = '';
  }

  // tslint:disable-next-line:member-ordering
  dropDown = ['Select City', 'NewDelhi', 'Mumbai', 'Chennai', 'Kolkata'];

  ngOnInit() {
  }
}
