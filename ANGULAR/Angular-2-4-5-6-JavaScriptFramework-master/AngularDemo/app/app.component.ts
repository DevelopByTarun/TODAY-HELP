import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // tslint:disable-next-line:no-inferrable-types
  message: string = 'Hello Angular 2/4 By Me';

  // apply class dynamically
  // tslint:disable-next-line:no-inferrable-types
  myStyle: string = 'red';
  // tslint:disable-next-line:no-inferrable-types
  styles: string = 'blue';
  // tslint:disable-next-line:no-inferrable-types
  data: string = '';
  // tslint:disable-next-line:no-inferrable-types
  value: string = 'text-box';

  takeInput(event) {
    // tslint:disable-next-line:prefer-const
    let result = event.target.value;
    this.data = result;
  }

  show(): void {
    this.message = 'This Is A Show Function';
    this.myStyle = this.styles;
  }
}
