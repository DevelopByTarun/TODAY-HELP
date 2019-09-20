import { Component } from '@angular/core';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.css']
})
export class HiddenComponent {
  // tslint:disable-next-line:no-inferrable-types
  showme: boolean = false;  // for show
  // tslint:disable-next-line:no-inferrable-types
  // showme: boolean = true; // for hide
  myStyle: String = 'red';

  takeInput(event): void {
    this.showme = event.target.value;
  }
}
