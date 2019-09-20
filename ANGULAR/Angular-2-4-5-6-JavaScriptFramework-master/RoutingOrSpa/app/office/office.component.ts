import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

// for get route params
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(active:ActivatedRoute, dataService:DataService) {
    this.title = 'This Is Office Component';
    this.active = active;
    this.dataService = dataService;
    this.showData = 'Null';
  }

  ngOnInit() {
  }

  title:string;
  area:string;
  state:string;
  country:string;
  // noinspection SpellCheckingInspection
  pincode:number;

  private active:ActivatedRoute;

  // data service
  private dataService:DataService;
  showData:string;

  getOfficeRouteParams() {
    this.active.params.subscribe((param)=> {
      this.area = param.area;
      this.state = param.state;
      this.country = param.country;
      this.pincode = param.pincode;
    });
  }

  getServiceData() {
    this.showData = this.dataService.getData();
  }

}
