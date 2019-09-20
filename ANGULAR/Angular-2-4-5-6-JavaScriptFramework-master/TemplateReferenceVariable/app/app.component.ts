import { Component } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.title = 'Template Reference Variable In Angular 2/4/5';
    this.title2 = 'This Is Data App Component';
  }

  // noinspection TsLint
  title:string;
  title2:string;
  colors = ['red', 'green', 'blue', 'cyan', 'pink', 'yellow', 'aqua', 'orange', 'yellowgreen', 'aquamarine', 'brown', 'forestgreen'];

 applyMultipleClasses(flag:string) {
   let multipleClass;
   // noinspection TsLint
   if(flag == 'done') {
     multipleClass = {
       'one': true,
       'two': true
     }
   }
   else {
     multipleClass = {
       'three': false,
       'four': true
     }
   }
   return multipleClass;
 }

}
