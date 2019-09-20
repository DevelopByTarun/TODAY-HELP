import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css']
})
export class SelectboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() myTitle:string;

  @Input() myColorsArray:Array<string>;

  selectedColor:string = 'RED';

}
