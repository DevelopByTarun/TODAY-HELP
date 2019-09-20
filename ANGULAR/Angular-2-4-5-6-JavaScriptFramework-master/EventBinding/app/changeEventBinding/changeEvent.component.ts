import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-changeevent',
  templateUrl: './changeEvent.component.html',
  styleUrls: ['../app.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class ChangeEventBinding {

  @Input()
  head: string;

  @Input()
  title: string;

  firstName: string;
  secondName: string;
  fullName: string;

  takeFirstName(event) {
    const fn = event.target.value;
    this.firstName = fn;
  }

  setSecondName(data: string) {
    this.secondName = data;
  }

  showName() {
    // this.fullName = this.firstName.concat(this.secondName);
    this.fullName = this.firstName + this.secondName;
  }

}
