import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {StudentDetails} from '../student-details';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})

export class FormGroupComponent implements OnInit {

  constructor() {
    this.submitted = false;
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, [
        Validators.required, Validators.pattern('[a-z]{4,9}'), Validators.minLength(4), Validators.maxLength(10), this.checkBlackListedStudents.bind(this)
      ]),
      'age': new FormControl(null, [
        Validators.required, Validators.maxLength(2)
      ]),
      'email': new FormControl(null, [
        Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      'info': new FormGroup({
        'username': new FormControl(null, [
          Validators.required, Validators.pattern('[a-z0-9]{4,14}'), Validators.minLength(4), Validators.maxLength(15)
        ]),
        'password': new FormControl(null, [
          Validators.required, Validators.pattern('[A-Z0-9]{4,14}'), Validators.minLength(4), Validators.maxLength(15)
        ])
      }),
      'gender': new FormControl(null, [
        Validators.required
      ]),
      'address': new FormArray([])  // for dynamic field generation
    });
  }

  checkStudentEmailAsynch(control:FormControl):Promise<any>|Observable<any> {   // Define Custom Asynch Validator
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        console.log("Inside timeout ",control.value);
        if(control.value == 'abc@gmail.com') {
          console.log("Inside If ",control.value);
          resolve({'emailBlackListed':true});
        }
        else {
          resolve(null);
        }
      },500);
    });
    return promise;  // if validation is pass , return null
  }

  blackListStudents:string[] = ["tim","kim","rim","sim"];

  checkBlackListedStudents(control:FormControl):{ [key:string]:boolean } {   // Define Custom Validator
    if(this.blackListStudents.indexOf(control.value) !== -1) {
      return {
        'blackStudents': true
      };
    }
    return null;  // if validation is pass , return null
  }

  registerForm:FormGroup;

  studentDetails = new StudentDetails();

  public submitted:boolean;

  addStudentAddressFieldsInFormArray() {                      // for multiple fields
    const studentAddressFields = new FormGroup({
      'state': new FormControl(null),
      'country': new FormControl(null),
      'pincode': new FormControl(null)
    });
    (<FormArray>this.registerForm.get('address')).push(studentAddressFields);
  }

  submitStudentDetailsForm(form) {
    if (form.invalid) {
      console.log('Unable To Submit Form, Please Try Again :: ',this.studentDetails);
      window.alert('Unable To Submit Form, Please Try Again');
    }
    else {
      let callyou = this.registerForm.get('name').value;
      let oldyou = this.registerForm.get('age').value;
      let emal = this.registerForm.get('email').value;
      let uid = this.registerForm.get('info.username').value;
      let pwd = this.registerForm.get('info.password').value;
      let sex = this.registerForm.get('gender').value;
      this.studentDetails.name = callyou;
      this.studentDetails.age = oldyou;
      this.studentDetails.email = emal;
      this.studentDetails.username = uid;
      this.studentDetails.password = pwd;
      this.studentDetails.gender = sex;
      console.log('You Have Successfully Submit Form :: ',this.studentDetails);
      window.alert('You Have Successfully Submit Form');
      this.submitted = true;
    }
  }

  resetForm() {
    this.registerForm.reset();
  }

}
