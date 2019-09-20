import {Component, QueryList} from '@angular/core';
import { ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title:string;
  titleRequired:boolean;
  fonty:string;

  subtitle1:string;
  subtitle2:string;
  subtitle3:string;

  constructor() {
    this.title = 'Data Exchange Through @ViewChild And @ViewChildren In Angular 2/4/5';
    this.titleRequired = true;
    this.subtitle1 = 'Demo With @ViewChild';
    this.fonty = 'arial';
    this.subtitle2 = 'Demo1 @ViewChildren With QueryList And ForEach';
    this.bookName1 = 'Angular4 With MySelf';
    this.bookName2 = 'Hibernate With Maven';
    this.bookName3 = 'SpringBoot';
    this.bookName4 = 'ReactJs By Examples';
    this.bookName5 = 'SpringOrm With Gradle';
    this.bookName6 = 'SpringJdbc With Batch';
    this.subtitle3 = 'Demo2 @ViewChildren With QueryList And ForEach';
    this.fruitsArray = ['Apple', 'Mango', 'Watermelon', 'Grapes', 'Orange', 'Banana'];
    this.vegetablesArray = ['Cabbage', 'Cauliflower', 'Spinach', 'Carrot', 'Onion', 'Potato'];
  }

  // for child component
  @ViewChild(ChildComponent)
  child:ChildComponent;

  updateChild() {
    this.child.message1 = 'This Message Is Send From Parent To Child';
  }

  // for child2 component
  bookName1:string;
  bookName2:string;
  bookName3:string;
  bookName4:string;
  bookName5:string;
  bookName6:string;

  @ViewChildren(Child2Component)
  childList:QueryList<Child2Component>;

  getBooksFromChild2() {
    this.childList.forEach((child)=> child.message = 'Book Name Is :: '+child.books);
    console.log("Child2 Books Length Are :: "+this.childList.length);
  }

  // for child3 component
  fruitsArray:Array<string>;
  vegetablesArray:Array<string>;

  @ViewChildren(Child3Component)
  childList2:QueryList<Child3Component>;

  getArrayFromChild3() {
    this.childList2.forEach((arr)=> arr.getPropArray = arr.myPropArray);
    console.log("Child3 Array Length Are :: "+this.childList2.length);
  }

}
