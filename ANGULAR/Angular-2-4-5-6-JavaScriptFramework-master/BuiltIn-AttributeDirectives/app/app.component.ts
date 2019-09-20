import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'NgClass And NgStyle Attribute Directive In Angular 2/4/5';
  isRequired:boolean;
  getSingleClass(value:string) {
    if(value == 'yes') {
      return true;
    }
    else {
      return false;
    }
  }

  title2:string = 'NgClass Directive';

  title3:string = 'NgStyle Directive';
}
