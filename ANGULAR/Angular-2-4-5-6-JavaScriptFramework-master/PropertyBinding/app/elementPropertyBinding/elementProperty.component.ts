import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-elementproperty',
  templateUrl: './elementProperty.component.html',
  styleUrls: ['../app.component.css']
})

// tslint:disable-next-line:component-class-suffix
export class ElementProperty {

  styles2: string = 'green';

  flag1: boolean = true;

  flag2: boolean = false;

  website1 = {
    name : 'Element Property Binding',
    url : 'https://github.com/amitsrivastava4all/FrontEndApr330/blob/master/An/app/app.component.ts',
    logo : './image/element.png',
    description: 'Through Brackets []'
};

website2 = {
  name : 'Element Property Binding',
  url : 'https://www.concretepage.com/angular-2/angular-2-property-binding-example',
  logo : './image/element.png',
  description: 'Through Bind-'
};

website3 = {
  name : 'Element Property Binding',
  url : 'https://github.com/amitsrivastava4all/FrontEndApr330/blob/master/An/app/app.component.ts',
  logo : './image/element.png',
  description: 'Through Interpolation'
};


}
