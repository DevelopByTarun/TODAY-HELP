import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title:string;
  subtitle1:string;
  subtitle2:string;

  constructor() {
    this.title = 'Reactive Or ModelDriven Form In Angular 2/4/5';
    this.subtitle1 = 'FormControl With FormGroup';
    this.subtitle2 = 'NestedFormGroup With FormArray';
  }
}
