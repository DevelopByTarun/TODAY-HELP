import {Directive, ElementRef} from '@angular/core';
import { OnInit } from '@angular/core';

@Directive({
  selector: '[appMultipleStyle]'
})
export class MultipleStyleDirective implements OnInit {

  elementRef:ElementRef;

  constructor(elementRef:ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'aqua';
    this.elementRef.nativeElement.style.backgroundColor = 'black';
    this.elementRef.nativeElement.style.fontFamily = 'cursive';
    this.elementRef.nativeElement.style.fontSize = '1.5em';
  }

}
