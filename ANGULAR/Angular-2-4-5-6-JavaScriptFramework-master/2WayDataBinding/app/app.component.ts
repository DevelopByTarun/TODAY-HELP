import { Component } from '@angular/core';
import { Employee } from './objectproperty/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Data Binding In Angular 2/4';

  // for changestyle component
  title2:string = "2 Way Data Binding Between Components To Change Style";
  textSize:number = 20;
  isColoury:boolean = true;

  // for selectbox component
  title3:string = '2 Way Data Binding with NgModel in Select Box';
  colors = ['RED', 'GREEN', 'BLUE', 'ORANGE', 'AQUA', 'YELLOW', 'BROWN'];

  // for objectproperty component
  title4:string = "2 Way Data Binding Between Components Using Object Property";
  emp = new Employee('Tarun', 'Auckland');
  isStylist:boolean = true;

}
