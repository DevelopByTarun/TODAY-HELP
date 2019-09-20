import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Attribute Binding In Angular 2/4';
  ht: number = 400;
  wt: number = 400;
  bd: number = 5;
  cp: number = 10;
  cs: number = 10;
  colsp: number = 2;
}
