import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Style Binding In Angular 2/4';

  result: number = 20;

  isFonty: boolean = true;
  small: number = 12;
  big: number = 25;

  isBtn: boolean = true;

}
