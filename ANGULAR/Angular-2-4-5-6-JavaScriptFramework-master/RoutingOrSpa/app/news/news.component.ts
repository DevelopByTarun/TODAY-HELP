import { Component, OnInit } from '@angular/core';

// for get route params
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private activate:ActivatedRoute) {
    this.title = 'This is News Component';
    this.newsDetails = '';
  }

  ngOnInit() {
  }

  title:string;
  newsDetails:string;

  getNewsRouteParams() {
    this.activate.params.subscribe((params)=> {
      this.newsDetails = 'We Broadcast Only '+params.type+' News And Our Speciality Is In '+ params.subtype+' News';
    });
  }

}
