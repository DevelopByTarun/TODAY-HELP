import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../student';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-validation',
  templateUrl: './template-driven-form-validation.component.html',
  styleUrls: ['./template-driven-form-validation.component.css']
})

export class TemplateDrivenFormValidationComponent implements OnInit {

  constructor() {
    console.log('Constructor Call');
    this.isColory = true;
    this.classic = 5;
    this.cityList = ['Alaska','Sydney', 'NewDelhi', 'Auckland', 'London', 'Barrow'];
    this.countryList = ['Usa', 'Australia', 'India', 'Newzealand', 'England', 'Canada'];
    this.useridMaxlength = 5;
    this.passwordPattern = '[A-Z]{4,9}';
    this.passwordMinlength = 4;
    this.passwordMaxlength = 10;
    this.namePattern = '[a-z]{4,9}';
    this.nameMinlength = 4;
    this.nameMaxlength = 10;
    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  }

  ngOnInit() {
    console.log('Component Is Initialized');
    this.initialised = 'Component Is Initialized';
  }

  initialised:string;

  @Input('prop1') myProp1:string;
  isColory:boolean;
  classic:number;

  cityList:Array<string>;
  countryList:Array<string>;

  stud = new Student();
  userid:number;
  password:string;
  name:string;
  email:string;
  gender:string;
  maritalstatus:string;
  city:string;
  country:string;

  useridMaxlength:number;

  passwordPattern:string;
  passwordMinlength:number;
  passwordMaxlength:number;

  namePattern:string;
  nameMinlength:number;
  nameMaxlength:number;

  emailPattern:string;

  takeCity(event):void {
    let myCity = event.target.value;
    this.city = myCity;
  }

  takeCountry(event):void {
    let myCountry = event.target.value;
    this.country = myCountry;
  }

  registerIt(form:NgForm):void {
    if (form.invalid) {
      console.log('Unable To Complete Registration :: ',this.stud);
      window.alert('Form Is Invalid, Please Try Again');
    }
    else {
      let id = this.userid;
      let pass = this.password;
      let nam = this.name;
      let emails = this.email;
      let sex = this.gender;
      let state = this.maritalstatus;
      this.stud.userid = id;
      this.stud.password = pass;
      this.stud.name = nam;
      this.stud.email = emails;
      this.stud.experience = form.controls['experience'].value;
      this.stud.gender = sex;
      this.stud.maritalStatus = state;
      this.stud.city = this.city;
      this.stud.country = this.country;
      console.log('Registration Is Completed :: ',this.stud);
      window.alert('You Have Successfully Submitted Form');
    }
  }

}

