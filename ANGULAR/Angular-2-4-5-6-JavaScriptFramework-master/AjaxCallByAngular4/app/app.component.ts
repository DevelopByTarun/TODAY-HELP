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
  flag:number;

  constructor() {
    this.title = 'Ajax Call With HttpModule With Http In Angular 2/4/5';
    this.flag = 5;
    this.subtitle1 = 'Call With Promise<>';
    this.subtitle2 = 'Call With Observable<>';
  }

}
