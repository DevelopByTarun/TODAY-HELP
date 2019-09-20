import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstreactive',
  templateUrl: './firstreactive.component.html',
  styleUrls: ['./firstreactive.component.css']
})
export class FirstreactiveComponent implements OnInit {

  firstForm: FormGroup;

  blackListedPasswords: string[] = ['tarun', 'varun', 'amit', 'kim'];

  constructor() { }

  ngOnInit() {
    this.firstForm = new FormGroup({
      // tslint:disable-next-line:max-line-length
      'uid': new FormControl(null, [Validators.required, Validators.email]),
      'password': this.getPassword(),
      'address': new FormArray([])
    });
  }

  // tslint:disable-next-line:one-line
  checkPassword(control: FormControl): {[key: string]: boolean}{
    // tslint:disable-next-line:one-line
    if (this.blackListedPasswords.indexOf(control.value) >= 0){
      return {'blackListed': true};
    }
    return null;  // if validation is pass , return null
 }

  getPassword(): FormGroup {
    const Password: FormGroup = new FormGroup({
      'pwd': new FormControl(null, [Validators.required, this.checkPassword.bind(this)])
    });
    return Password;
  }

  addAddress() {
    const addressField = new FormControl(null, Validators.required);
    (<FormArray>this.firstForm.get('address')).push(addressField);
  }

  doSubmit() {
    console.log('All Form Data Is :: ' + this.firstForm);
  }
}
