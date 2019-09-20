import { Component, OnInit } from '@angular/core';

// noinspection TsLint
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  // for aboutus component route params
  public aboutuslink: string;
  public name: string;
  public job: string;

  constructor() {
    this.name = 'TarunParve';
    this.job = 'Software Engginer';
    this.aboutuslink = 'aboutus/' + this.name + '/' + this.job;
    this.login = 'Guest';
    this.title = 'This Is Description Component';
    this.desclink = 'description/' + this.title;

  }

  ngOnInit() {
  }

  // for desc component
  login:string;
  desclink:string;
  title:string;

  changeWelcome() {
    this.login = 'Tarun';
  }

}
