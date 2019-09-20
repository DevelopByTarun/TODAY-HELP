import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.title = 'TemplateDrivenForm With Validation In Angular 2/4/5';
    this.subtitle1 = 'Template Driven Form';
    this.subtitle2 = 'Template Driven Form With Predefined Validators And Custom Messages';
    this.family = true;
    this.texts = 10;
  }

  title:string;
  texts:number;
  family:boolean;

  subtitle1:string;
  subtitle2:string;

  getMultipleStyles(flag:string) {
    let styles;
    if (flag == 'apply') {
      styles = {
        'text-align': this.texts >= 10 ? 'center':'right',
        'font-family': !this.family ? 'cursive':'arial black'
      };
    }
    else {
      styles = {
        'text-align': this.texts <= 10 ? 'center':'right',
        'font-family': this.family ? 'cursive':'arial black'
      };
    }
    return styles;
  }

}
