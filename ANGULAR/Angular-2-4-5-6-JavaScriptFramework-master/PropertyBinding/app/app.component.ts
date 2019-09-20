import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  heading: string = 'This Is Angular2 Property Binding';
  myStyle: string = 'head';


  head1: string = 'Component Property Binding';
  styles1: string = 'red';
  name: string = 'Angular CLI Official Documentation';
  // tslint:disable-next-line:max-line-length
  imageUrl: string = 'https://i.ytimg.com/vi/GFl8RCOL_PY/hqdefault.jpg';
  tutorialLink: string = 'https://angular.io/tutorial';

}

