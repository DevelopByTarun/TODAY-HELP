import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Name } from '../name';
import { Address } from '../address';
import { Person } from '../person';

@Component({
  selector: 'app-jsonpipe',
  templateUrl: './jsonpipe.component.html',
  styleUrls: ['./jsonpipe.component.css']
})

export class JsonpipeComponent implements OnInit {

  constructor() {
    this.enterFirstName = 'Tarun';
    this.enterLastName = 'Parve';
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  @Input('prop2') myProp2:string;

  @Input('prop3') myProp3:string;

  @Input('prop4') myProp4:string;


  // for name class
  enterFirstName:string;
  enterLastName:string;
  name = new Name(this.enterFirstName, this.enterLastName);


  // for address class
  homeAddress = new Address('Delhi', 'India', 110089);
  officeAddress = new Address('Sydney', 'Australia', 24524524);
  addressArray = [this.homeAddress, this.officeAddress];

  // for person class
  currentDate = new Date();

  person1 = new Person(1001, this.name, this.currentDate, this.homeAddress);
  person2 = new Person(1002, this.name, this.currentDate, this.officeAddress);

}
