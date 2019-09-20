import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    this.title = 'Custom Directive In Angular 2/4/5';
    this.myText = true;
    this.subtitle1 = 'Custom Attribute Directive Demo';
    this.subtitle2 = 'Custom Structural Directive Demo';
  }

  title:string;
  myText:boolean;

  // custom attribute directive
  subtitle1:string;

  subtitle2:string;

}


