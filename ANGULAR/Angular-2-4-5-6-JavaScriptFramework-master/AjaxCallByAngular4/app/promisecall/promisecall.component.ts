import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { PromiseserviceService } from '../ajaxservice/services/promiseservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-promisecall',
  templateUrl: './promisecall.component.html',
  styleUrls: ['./promisecall.component.css']
})

export class PromisecallComponent implements OnInit, OnDestroy {

  constructor(promiseService:PromiseserviceService) {
    console.log('Constructor Call');
    this.promiseService = promiseService;
    this.flag = true;
  }

  ngOnInit() {
    console.log('Make Promise Ajax Calls');
  }

  flag:boolean;

  @Input('prop') public myProp:string;

  public productList:Product[] = [];

  private promiseService:PromiseserviceService;

  callGetProductsFromServer() {
    this.promiseService.getProductsFromServer().then((proud)=> {
      console.log('Products From Server Through Promise :: ',proud);
      this.productList = proud;
    });
  }

  callGetProductsFromLocalServer() {
    this.promiseService.getProductsFromLocalServer().then((proud)=> {
      console.log('Products From Local Server :: ',proud);
      this.productList = proud;
    });
  }

  ngOnDestroy() {
    console.log('Destroy Promise Ajax Calls');
  }

}
