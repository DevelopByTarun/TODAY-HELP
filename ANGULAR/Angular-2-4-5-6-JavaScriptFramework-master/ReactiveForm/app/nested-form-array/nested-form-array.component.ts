import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.css']
})
export class NestedFormArrayComponent implements OnInit {

  addressForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'uid': new FormControl(null),
      'passwords': this.getPasswords(),
      'emal': new FormControl(null),
      'address': new FormArray([])
    });
  }

  getPasswords(): FormGroup {        // nested form group
    const Passwords: FormGroup = new FormGroup({
      'pwd1': new FormControl(null),
      'pwd2': new FormControl(null)
    });
    return Passwords;
  }

  // addName() {     for single field
  //   const nameField = new FormControl(null);
  //   (<FormArray>this.addressForm.get('named')).push(nameField);
  // }

  addAddress() {      // nested form array with form group
    const addressField: FormGroup = new FormGroup({
      'address1': new FormControl(null),
      'address2': new FormControl(null)
    });
    (<FormArray>this.addressForm.get('address')).push(addressField);
  }

  doRegister() {
    console.log('Nested Form Array Data Is :: ' + this.addressForm);
  }

}
