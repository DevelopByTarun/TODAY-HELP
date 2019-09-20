import { Component, OnInit } from '@angular/core';

// for get route params
import { ActivatedRoute } from '@angular/router';

// noinspection TsLint
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit {

  constructor(private activate: ActivatedRoute) {
    this.title = 'This Is About Us Component';
    this.paramDetails = '';
  }

  ngOnInit() {
  }

  title: string;
  paramDetails: string;

  getCompRouteParams() {
    this.activate.params.subscribe(params=> {
      this.paramDetails = 'My Name Is '+ params.name + ' And My Job Profile Is '+params.job;
    });
  }

}
