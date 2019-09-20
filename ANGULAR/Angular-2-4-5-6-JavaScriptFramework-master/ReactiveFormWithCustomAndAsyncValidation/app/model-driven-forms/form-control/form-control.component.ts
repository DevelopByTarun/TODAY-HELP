import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EmployeeDetails} from '../employee-details';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})

export class FormControlComponent implements OnInit {

  constructor() {
    this.countriesList = ['India','NewZealand','Australia','Germany','Usa'];
    this.submitted = false;
  }

  ngOnInit() {
    this.myFirstForm = new FormGroup({
      'username': new FormControl(null, [
        Validators.required, Validators.pattern('[a-z0-9]{4,14}'), Validators.minLength(4), Validators.maxLength(15)
      ]),
      'password': new FormControl(null, [
        Validators.required, Validators.pattern('[A-Z0-9]{4,14}'), Validators.minLength(4), Validators.maxLength(15)
      ]),
      'name': new FormControl(null, [
        Validators.required, Validators.pattern('[a-z]{4,9}'), Validators.minLength(4), Validators.maxLength(10)
      ]),
      'email': new FormControl(null, [
        Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      'gender': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required])
    });
  }

  myFirstForm:FormGroup;

  countriesList:Array<string>;

  employeeDetails = new EmployeeDetails();

  submitted:boolean;

  doSubmit(form) {
    if (form.invalid) {
      console.log('Unable To Submit Form, Please Try Again :: ',this.employeeDetails);
      window.alert('Unable To Submit Form, Please Try Again');
    }
    else {
      let uid = this.myFirstForm.get('username').value;
      let pwd = this.myFirstForm.get('password').value;
      let callyou = this.myFirstForm.get('name').value;
      let emal = this.myFirstForm.get('email').value;
      let sex = this.myFirstForm.get('gender').value;
      let county = this.myFirstForm.get('country').value;
      this.employeeDetails.username = uid;
      this.employeeDetails.password = pwd;
      this.employeeDetails.name = callyou;
      this.employeeDetails.email = emal;
      this.employeeDetails.gender = sex;
      this.employeeDetails.country = county;
      console.log('You Have Successfully Submit Form :: ',this.employeeDetails);
      window.alert('You Have Successfully Submit Form');
      this.submitted = true;
    }
  }

  setDefaultEmployeeValues() {
    this.myFirstForm.setValue({
      username: 'gemini86',
      password: 'PARVE15',
      name: 'tarun',
      email: 'gemini86.tarun@gmail.com',
      gender: 'male',
      country: 'Australia'
    });
  }

  resetMyForm() {
    this.myFirstForm.reset();
  }


}
