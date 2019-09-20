import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-testing-component2',
  templateUrl: './testing-component2.component.html',
  styleUrls: ['./testing-component2.component.css'],
  providers: [UserService, DataService]
})
export class TestingComponent2Component implements OnInit {

  private userService:UserService;

  private dataService:DataService;

  constructor(userService:UserService, dataService:DataService) {
    this.userService = userService;
    this.dataService = dataService;
    this.isLoggedIn = false;
    this.subtitle = 'Testing Component2';
  }

  subtitle:string;
  user: { name:string };
  isLoggedIn:boolean;
  data:string;

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDataService().then((data:string)=> {
      this.data = data;
    });
  }

  updateValue() {
    this.isLoggedIn = true;
    console.log('Logged In :: ',this.isLoggedIn);
    console.log('Data Is :: ', this.data);
  }

}
