import { Component, OnInit } from '@angular/core';
import { AppService, Item } from './app.service';
import {CalcService} from './calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, CalcService]
})
export class AppComponent implements OnInit {
  title = 'Service In Angular2';
  result1: number;
  result2: number;
  result3: number;
  result4: number;
  items: Item[] = [];
  service: AppService;

  constructor(service: AppService) {
    this.service = service;
  }
  ngOnInit() {
    this.items = this.service.getItems();
    this.result1 = this.service.getAdd();
    this.result2 = this.service.getSubtract();
    this.result3 = this.service.getMultiply();
    this.result4 = this.service.getDivide();
  }
}