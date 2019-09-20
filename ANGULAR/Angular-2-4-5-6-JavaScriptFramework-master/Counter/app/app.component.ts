import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter In Angular 2/4';

  styles: string = 'myStyle';

  counter: number = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
