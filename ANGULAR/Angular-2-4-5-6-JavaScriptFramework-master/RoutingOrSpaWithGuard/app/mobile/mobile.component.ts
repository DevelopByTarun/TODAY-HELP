import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // for getting route parameters
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  msg: String;
  activatedRoute: ActivatedRoute;
  productService: ProductServiceService;

  constructor(activatedRoute: ActivatedRoute, productService: ProductServiceService) {
    this.activatedRoute = activatedRoute;
    this.productService = productService;
   }

   // tslint:disable-next-line:one-line
   ngOnInit() {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.message = 'Price is ' + params.price + ' And Brand is ' + params.brand;
    // // tslint:disable-next-line:semicolon
    // })
  }

  // tslint:disable-next-line:member-ordering
  productArray: Product[];
  loadProducts() {
    this.productService.fetchProducts().subscribe(
      (itemArray) => {
        this.productArray = itemArray['mobiles'];
      }
    );
  }

}
