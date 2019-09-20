import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit Testing in Angular2';
  dt: any;
  message: String;

  show(): String {
    return this.message = 'this is function show calling';
  }

  getDate() {
    this.dt = new Date().toDateString();
    return this.dt;
  }
}
