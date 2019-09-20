import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck} from '@angular/core';
import {Employee} from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  constructor() {
    this.title = 'Lifecycle Hooks In Angular 2/4/5';
    this.subtitle1 = 'OnChanges Lifecycle Method Demo';
    this.isText = 20;
    this.isFonty = true;
    this.message = 'this message is send parent to child';
    this.subtitle2 = 'OnInit And OnDestroy Lifecycle Method Demo';
    this.showCounter = true;
    this.subtitle3 = 'Reamining Lifecycle Methods Call';
  }

  title:string;

  // for lifecycle onchanges component

  subtitle1:string;
  employeeObj = new Employee('tarun', 31, 'sydney', 110089);
  message:string;
  isText:number;
  isFonty:boolean;

  name:string;
  age:number;
  city:string;
  pincode:number;

  takeName(event) {
    let n = event.target.value;
    this.name = n;
  }

  takeAge(event) {
    let a = parseInt(event.target.value);
    this.age = a;
  }

  takeCity(event) {
    let c = event.target.value;
    this.city = c;
  }

  takePincode(event) {
    let p = parseInt(event.target.value);
    this.pincode = p;
  }

  submitEmployeeDetails(form):void {
    if(form.invalid) {
      console.log('Form Is Invalid :: ',this.employeeObj);
      window.alert('Form Is Invalid :: '+form.status);
    }
    else {
      let namy = this.name;
      let aged = this.age;
      let cite = this.city;
      let pin = this.pincode;
      this.employeeObj = new Employee(namy, aged, cite, pin);
      console.log('You Have Successfully Submit Form :: ',this.employeeObj);
      window.alert('You Have Successfully Submit Form :: '+form.status);
    }
  }

  // for lifecycle oninit-ondestroy component

  subtitle2:string;
  showCounter:boolean;

  check:string;
  viewInit:string;
  viewChecked:string;
  contentInit:string;
  contentChecked:string;
  subtitle3:string;

  toggleShowCounter() {
    this.showCounter = (this.showCounter === true)? false : true;
  }

  ngAfterContentChecked(): void {
    console.log('Calling From ngAfterContentChecked() method');
    this.contentChecked = 'Calling From ngAfterContentChecked() method';
  }

  ngAfterContentInit(): void {
    console.log('Calling From ngAfterContentInit() method');
    this.contentInit = 'Calling From ngAfterContentInit() method';
  }

  ngAfterViewChecked(): void {
    console.log('Calling From ngAfterViewChecked() method');
    this.viewChecked = 'Calling From ngAfterViewChecked() method';
  }

  ngAfterViewInit(): void {
    console.log('Calling From ngAfterViewInit() method');
    this.viewInit = 'Calling From ngAfterViewInit() method';
  }

  ngDoCheck(): void {
    console.log('Calling From ngDoCheck() method');
    this.check = 'Calling From ngDoCheck() method';
  }

}
