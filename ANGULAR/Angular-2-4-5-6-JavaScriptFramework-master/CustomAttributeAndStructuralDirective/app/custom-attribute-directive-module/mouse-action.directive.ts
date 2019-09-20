import {Directive, ElementRef, Input, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[appMouseAction]'
})

export class MouseActionDirective {

  elementRef:ElementRef;

  render:Renderer;

  constructor(elementRef:ElementRef, render:Renderer) {
    this.elementRef = elementRef;
    this.render = render;
  }

  @Input() myColor:string;

  @Input() myBgColor:string;

  @Input() myFontFamily:string;

  @Input() myFontSize:string;

  @Input() myFontWeight:string;

  @Input() myFontStyle:string;

  @Input() myTextAlign:string;

  @Input() myTextTransform:string;

  @Input() myBorder:string;

  @Input() myBorderColor:string;

  @Input() myBorderStyle:string;

  @HostListener('mouseover') onMouseOver() {
    this.applyDynamicStyles(this.myColor, this.myBgColor, this.myFontFamily, this.myFontSize, this.myFontWeight, this.myFontStyle, this.myTextAlign, this.myTextTransform, this.myBorder, this.myBorderColor, this.myBorderStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyDynamicStyles(null, null, null, null, null, null, null, null, null, null, null);
  }

  applyDynamicStyles(color:string, bgColor:string, fontFamily:string, fontSize:string, fontWeight:string, fontStyle:string, textAlign:string, textTransform:string, border:string, borderColor:string, borderStyle:string) {
    this.render.setElementStyle(this.elementRef.nativeElement, 'color', color);
    this.render.setElementStyle(this.elementRef.nativeElement, 'background-color', bgColor);
    this.render.setElementStyle(this.elementRef.nativeElement, 'font-family', fontFamily);
    this.render.setElementStyle(this.elementRef.nativeElement, 'font-size', fontSize);
    this.render.setElementStyle(this.elementRef.nativeElement, 'font-weight', fontWeight);
    this.render.setElementStyle(this.elementRef.nativeElement, 'font-style', fontStyle);
    this.render.setElementStyle(this.elementRef.nativeElement, 'text-align', textAlign);
    this.render.setElementStyle(this.elementRef.nativeElement, 'text-transform', textTransform);
    this.render.setElementStyle(this.elementRef.nativeElement, 'border', border);
    this.render.setElementStyle(this.elementRef.nativeElement, 'border-color', borderColor);
    this.render.setElementStyle(this.elementRef.nativeElement, 'border-style', borderStyle);
  }

}
