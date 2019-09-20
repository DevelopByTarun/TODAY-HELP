import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'uid': new FormControl(null),
      'passwords': this.getPasswords(),
      'emal': new FormControl(null)
    });
  }

  getPasswords(): FormGroup {    // nested form group function
    const Passwords: FormGroup = new FormGroup({
      'pwd1': new FormControl(null),
        'pwd2': new FormControl(null)
    });
    return Passwords;
  }

  registerFormSubmit() {
    console.log('Register Form Data Is :: ' + this.registerForm);
  }

}
