import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';  // step 3

@Component({
  selector: 'app-basic-reactive-form',
  templateUrl: './basic-reactive-form.component.html',
  styleUrls: ['./basic-reactive-form.component.css']
})
export class BasicReactiveFormComponent implements OnInit {

  basicReactiveForm: FormGroup;  // step 4
  userid: String;
  password: String;

  constructor() { }

  ngOnInit() {
    this.basicReactiveForm = new FormGroup(
      {
        'uid': new FormControl(null),
        'pwd': new FormControl(null)
      }
    );
  }

  basicReactiveFormSubmit(data) {
    this.userid = data.uid;
    this.password = data.pwd;
    console.log('Basic Reactive Form Data Is :: ' + this.basicReactiveForm);
  }

  getReset() {
    this.userid = '';
    this.password = '';
  }

}
