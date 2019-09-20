import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-componentproperty',
  templateUrl: './componentProperty.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class ComponentProperty {

  @Input()
  name: string;

  @Input()
  url: string;

  @Input()
  links: string;

}
