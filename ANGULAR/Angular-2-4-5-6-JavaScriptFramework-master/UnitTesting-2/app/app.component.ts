import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string;
  isColor:boolean;
  isBgColor:boolean;
  isFonty:number;
  isTextAlign:boolean;

  constructor() {
    this.title = 'Unit Testing In Angular 2/4/5';
    this.isColor = true;
    this.isBgColor = true;
    this.isFonty = 20;
    this.isTextAlign = true;
  }

  getMultipleStyles(flag:string) {
    let styles;
    if (flag == 'apply') {
      styles = {
        'color': this.isColor? 'white':'red',
        'background-color': !this.isBgColor? 'red':'black',
        'font-family': this.isFonty >= 20? 'verdana':'waseem',
        'text-align': !this.isTextAlign? 'right':'center'
      };
    }
    else {
      styles = {
        'color': !this.isColor? 'maroon':'red',
        'background-color': this.isBgColor? 'brown':'aquamarine',
        'font-family': this.isFonty >= 20? 'webdings':'monospaced',
        'text-align': !this.isTextAlign? 'justify-all':'center'
      };
    }
    return styles;
  }

}
