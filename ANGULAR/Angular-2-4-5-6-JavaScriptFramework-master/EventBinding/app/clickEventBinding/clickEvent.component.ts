import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clickevent',
  templateUrl: './clickEvent.component.html',
  styleUrls: ['../app.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class ClickEventBinding {

  @Input()
  head: string;

  @Input()
  title: string;

  isValid: boolean;

  showValid(): void {
    this.isValid = true;
  }

  showInvalid(): void {
    this.isValid = false;
  }

}
