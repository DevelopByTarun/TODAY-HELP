import {Directive, Renderer2, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})

export class AddClassDirective implements OnInit {

  elementRef:ElementRef;

  render2:Renderer2;

  constructor(elementRef:ElementRef, render2:Renderer2) {
    this.elementRef = elementRef;
    this.render2 = render2;
  }

  @Input() myNewClass:string;

  ngOnInit(): void {
    this.addClassDynamically(this.myNewClass);
  }

  addClassDynamically(className:string) {
    this.render2.addClass(this.elementRef.nativeElement, className);
  }

}
