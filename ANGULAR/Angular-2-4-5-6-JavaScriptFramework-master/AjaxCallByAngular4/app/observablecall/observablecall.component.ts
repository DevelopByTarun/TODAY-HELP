import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ObservableserviceService} from '../ajaxservice/services/observableservice.service';
import {Product} from '../product';


@Component({
  selector: 'app-observablecall',
  templateUrl: './observablecall.component.html',
  styleUrls: ['./observablecall.component.css']
})

export class ObservablecallComponent implements OnInit, OnDestroy {

  private observableService:ObservableserviceService;

  constructor(observableService:ObservableserviceService) {
    this.observableService = observableService;
    this.flag = true;
  }

  ngOnInit() {
    console.log('Make Observable Ajax Call');
  }

  flag:boolean;

  @Input('prop') myProp:string;

  productList:Product[] = [];

  callGetProductsFromServer() {
    this.observableService.getProductsFromServer().subscribe((proud)=> {
      console.log('Products From Server Through Observable :: ',proud);
      this.productList = proud;
    });
  }

  ngOnDestroy() {
    console.log('Destroy Observable Ajax Call');
  }

}
