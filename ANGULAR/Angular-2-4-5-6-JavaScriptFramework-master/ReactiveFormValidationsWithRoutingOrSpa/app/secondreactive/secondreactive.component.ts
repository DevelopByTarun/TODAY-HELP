import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondreactive',
  templateUrl: './secondreactive.component.html',
  styleUrls: ['./secondreactive.component.css']
})
export class SecondreactiveComponent implements OnInit {

  registerForm: FormGroup;

  useridPattern = '[a-zA-Z0-9]';
  passwordPattern = '[a-zA-Z0-9]';
  fnamePattern = '[a-zA-Z]';
  lnamePattern = '[a-zA-Z]';
  streetPattern = '[a-zA-Z0-9]';
  pincodePattern = '[0-9]';
  cityPattern = '[a-zA-Z]';
  countryPattern = '[a-zA-Z]';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  useridValue: String;
  passwordValue: String;
  fnameValue: String;
  // lnameValue: String;
  emailValue: String;
  // streetValue: String;
  // pincodeValue: String;
  // cityValue: String;
  // countryValue: String;

  constructor() { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'uid': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern(this.useridPattern)
      ])),
      'pwd': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern(this.passwordPattern)
      ])),
      'name': new FormGroup({
        'firstname': new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
          Validators.pattern(this.fnamePattern)
        ])),
        'lastname': new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
          Validators.pattern(this.lnamePattern)
        ]))
      }),
      'address': new FormArray([]),
      'emal': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(50),
        Validators.pattern(this.emailPattern),
        Validators.email
      ]))
    });
  }

  addAddressGroup() {
    const addressGroupField: FormGroup = new FormGroup({
      'street': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(40),
        Validators.pattern(this.streetPattern)
      ])),
      'pincode': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.pincodePattern)
      ])),
      'city': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern(this.cityPattern)
      ])),
      'country': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(this.countryPattern)
      ]))
    });
    (<FormArray>this.registerForm.get('address')).push(addressGroupField);
  }

  doRegister(data) {
    this.useridValue = data.uid;
    this.passwordValue = data.pwd;
    this.emailValue = data.emal;
    this.fnameValue = data.name.firstname;
    console.log('Register Form Value Is :: ' + this.registerForm);
  }

}
