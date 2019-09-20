import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.title = 'Ajax Call Through Observable With HttpClientModule In Angular 5';
    this.subtitle1 = 'Search Image With Observable';
    this.subtitle2 = 'Get All Books With Observable';
    this.subtitle4 = 'Get Book By Category And Year With Observable';
    this.subtitle5 = 'Get Book By Category And Writer With Observable';
    this.isColor = true;
    this.isBackgroundColor = false;
  }

  title:string;
  subtitle1:string;
  subtitle2:string;
  subtitle4:string;
  subtitle5:string;

  isColor:boolean;
  isBackgroundColor:boolean;

  getMultipleStyles(flag:string) {
    let styles;
    if (flag == 'resolve') {
      styles = {
        'color': this.isColor ? 'white':'red',
        'background-color': !this.isBackgroundColor ? 'black' : 'yellow'
      }
    }
    else {
      styles = {
        'color': this.isColor ? 'cyan':'pink',
        'background-color': !this.isBackgroundColor ? 'aqua' : 'brown'
      }
    }
    return styles;
  }

}
