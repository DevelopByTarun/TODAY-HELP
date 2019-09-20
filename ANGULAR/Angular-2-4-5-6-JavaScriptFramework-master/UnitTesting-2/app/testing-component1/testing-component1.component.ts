import { Component} from '@angular/core';

@Component({
  selector: 'app-testing-component1',
  templateUrl: './testing-component1.component.html',
  styleUrls: ['./testing-component1.component.css']
})

export class TestingComponent1Component {

  subtitle:string;

  constructor() {
    this.subtitle = 'Testing Component 1';
    this.message = 'This Is The Value Of Message Variable';
  }

  message:string;

  showMessage():string {
    return this.message;
  }

}
