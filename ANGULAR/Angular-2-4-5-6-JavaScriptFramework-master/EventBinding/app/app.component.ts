import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appHeading: string =  'head';
  appTitle: string = 'Event Binding Or Handling In Angular 2/4';

  inputTitle: string = 'Input Event Binding';
  inputHeading: string =  'red';

  clickTitle: string = 'Click Event Binding';
  clickHeading: string =  'green';

  changeTitle: string = 'Change Event Binding';
  changeHeading: string =  'blue';

}

