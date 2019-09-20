import { DataService } from '../serviceTesting/data.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService, UserService]
})
export class UserComponent implements OnInit {

  user: {
    name: String;
  };
  data: String;
  // tslint:disable-next-line:no-inferrable-types
  isLoggedIn: boolean = false;
  loged: boolean;

  private dataService: DataService;
  private userService: UserService;

  constructor(dataService: DataService, userService: UserService) {
    this.dataService = dataService;
    this.userService = userService;
   }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }

  update() {
    this.isLoggedIn = true;
    this.loged = this.isLoggedIn;
    console.log('Update function calling .... ' + this.isLoggedIn);
  }
}
