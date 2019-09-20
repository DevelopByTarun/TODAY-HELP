import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() {
    this.isColory = true;
    this.classic = 5;
    this.cityList = ['Alaska','Sydney', 'NewDelhi', 'Auckland', 'London', 'Barrow'];
    this.countryList = ['Usa', 'Australia', 'India', 'Newzealand', 'England', 'Canada'];
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;
  isColory:boolean;
  classic:number;

  cityList:Array<string>;
  countryList:Array<string>;

  stud:Student = new Student();

  userid:number;
  password:string;
  email:string;
  gender:string;
  maritalStatus:string;
  city:string;
  country:string;

  takeUserid(event):void {
    let u = parseInt(event.target.value);
    this.userid = u;
  }

  takePassword(event):void {
    let p = event.target.value;
    this.password = p;
  }

  takeEmail(event):void {
    let e = event.target.value;
    this.email = e;
  }

  takeGender(event):void {
    let g = event.target.value;
    this.gender = g;
  }

  takeMaritalStatus(event):void {
    let marry = event.target.value;
    this.maritalStatus = marry;
  }

  takeCity(event):void {
    let myCity = event.target.value;
    this.city = myCity;
  }

  takeCountry(event):void {
    let myCountry = event.target.value;
    this.country = myCountry;
  }

  doRegister(form:NgForm):void {
    if (form.invalid) {
      console.log('Unable To Complete Registration :: ',this.stud);
      window.alert('Form Is Invalid, Please Try Again');
    }
    else {
      this.stud.userid  = this.userid;
      this.stud.password = this.password;
      this.stud.name = form.controls['name'].value;
      this.stud.email = this.email;
      this.stud.experience = form.controls['experience'].value;
      this.stud.gender = this.gender;
      this.stud.maritalStatus = this.maritalStatus;
      this.stud.city = this.city;
      this.stud.country = this.country;
      console.log('Registration Is Completed :: ',this.stud);
      window.alert('You Have Successfully Submitted Form :: '+form);
    }
  }

}
