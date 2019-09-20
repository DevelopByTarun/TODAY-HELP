import { Component, OnInit } from '@angular/core';

// data service
import { DataService } from '../data.service';

// for route param
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corpoffice',
  templateUrl: './corpoffice.component.html',
  styleUrls: ['./corpoffice.component.css']
})
export class CorpofficeComponent implements OnInit {

  constructor(data:DataService, active:ActivatedRoute) {
    this.data = data;
    this.active = active;
    this.title = 'This Is Corporate Office Component';
    this.area = 'Null';
    this.state = 'Null';
    this.country = 'Null';
    this.pincode = 0;
    this.message = '';
    this.isOk = true;
  }

  ngOnInit() {
  }

  title:string;
  area:string;
  state:string;
  country:string;
  // noinspection JSUnusedGlobalSymbols
  pincode:number;
  message:string;
  isOk:boolean;

  private data:DataService;
  private active:ActivatedRoute;

  getCorporateOfficeRouteParam() {
    this.active.params.subscribe((param)=> {
      this.area = param.area;
      this.state = param.state;
      this.country = param.country;
      this.pincode = param.pincode;
    });
  }

  takeInput(event) {
    var msg = event.target.value;
    this.message = msg;
  }

  setServiceData() {
    this.data.setData(this.message);
  }

}
