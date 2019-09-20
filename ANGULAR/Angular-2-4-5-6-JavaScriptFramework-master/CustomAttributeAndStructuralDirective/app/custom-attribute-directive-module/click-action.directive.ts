import { Directive, Renderer, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClickAction]'
})

export class ClickActionDirective {

  elementRef:ElementRef;

  render:Renderer;

  constructor(elementRef:ElementRef, render:Renderer) {
    this.elementRef = elementRef;
    this.render = render;
  }

  @Input() myFlag:string;

  @Input() myCol:string;

  @Input() myBgCol:string;

  @Input() myFFamily:string;

  @Input() myFSize:string;

  @HostListener('click') onClickEvent() {
    this.clickEventBinding(this.myFlag, this.myCol, this.myBgCol, this.myFFamily, this.myFSize);
  }

  clickEventBinding(flag:string, color:string, bgColor:string, fontFamily:string, fontSize:string) {
    if(flag == 'true') {
      this.render.setElementStyle(this.elementRef.nativeElement, 'color', color);
      this.render.setElementStyle(this.elementRef.nativeElement, 'background-color', bgColor);
      this.render.setElementStyle(this.elementRef.nativeElement, 'font-family', fontFamily);
      this.render.setElementStyle(this.elementRef.nativeElement, 'font-size', fontSize);
    }
    else if (flag == 'false') {
      this.render.setElementStyle(this.elementRef.nativeElement, 'color', null);
      this.render.setElementStyle(this.elementRef.nativeElement, 'background-color', null);
      this.render.setElementStyle(this.elementRef.nativeElement, 'font-family', null);
      this.render.setElementStyle(this.elementRef.nativeElement, 'font-size', null);
    }
  }

}
