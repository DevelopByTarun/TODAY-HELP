import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message1:string;

  constructor() {
    this.message1 = 'This Message Is Belongs To Child';
  }

  ngOnInit() {
  }

}
