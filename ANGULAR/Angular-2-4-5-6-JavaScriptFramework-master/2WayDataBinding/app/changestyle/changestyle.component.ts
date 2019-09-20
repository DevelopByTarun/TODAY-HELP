import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-changestyle',
  templateUrl: './changestyle.component.html',
  styleUrls: ['./changestyle.component.css']
})
export class ChangestyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() myTitle:string;

  @Input() myTextSize:number;

  @Output() myTextSizeChange = new EventEmitter<number>();

  emitTextSizeChange() {
    this.myTextSizeChange.emit(this.myTextSize);
  }

  increaseTextSize() {
    this.myTextSize = this.myTextSize + 1;
    this.emitTextSizeChange();
  }

  decreaseTextSize() {
    this.myTextSize = this.myTextSize - 1;
    this.emitTextSizeChange();
  }

}
