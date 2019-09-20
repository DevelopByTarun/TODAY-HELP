import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() {
    this.message = 'Default Value Of Child2 Variable Name Message';
  }

  ngOnInit() {
  }

  @Input() books:string;

  message:string;

}
