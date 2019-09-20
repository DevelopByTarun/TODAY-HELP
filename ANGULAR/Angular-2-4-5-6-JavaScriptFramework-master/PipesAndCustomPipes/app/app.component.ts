import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.title = 'Pipes With Custom Pipe In Angular 2/4/5';

    // for date pipe
    this.subtitle1 = 'Date Pipe Demo';
    this.subtitle2 = 'Predefined Date Formats';
    this.subtitle3 = 'Custom Date Formats';
    this.subtitle4 = 'Toggle Date Format';

    // for slice pipe
    this.subtitle5 = 'Slice Pipe Demo';
    this.subtitle6 = 'Slice Of An Array';
    this.subtitle7 = 'Slice Of A String';

    // for json pipe
    this.subtitle8 = 'Json Pipe Demo';
    this.subtitle9 = 'Json Pipe';
    this.subtitle10 = 'JsonArray Pipe';
    this.subtitle11 = 'JsonObject Pipe';

    // for numbers related pipes
    this.subtitle12 = 'Numbers Related Pipes';
    this.subtitle13 = 'Decimal Pipe';
    this.subtitle14 = 'Percent Pipe';
    this.subtitle15 = 'Currency Pipe';

    // for custom pipes
    this.subtitle16 = 'Custom Pipes';
    this.subtitle17 = 'Portion Custom Pipe';
    this.subtitle18 = 'ExponentialStrength Custom Pipe';
    this.subtitle19 = 'MyJson Custom Pipe';
  }

  title:string;

  // for date pipe
  subtitle1:string;
  subtitle2:string;
  subtitle3:string;
  subtitle4:string;

  // for slice pipe
  subtitle5:string;
  subtitle6:string;
  subtitle7:string;

  // for json pipe
  subtitle8:string;
  subtitle9:string;
  subtitle10:string;
  subtitle11:string;

  // for numbers pipes
  subtitle12:string;
  subtitle13:string;
  subtitle14:string;
  subtitle15:string;

  // for custom pipes
  subtitle16:string;
  subtitle17:string;
  subtitle18:string;
  subtitle19:string;

}
