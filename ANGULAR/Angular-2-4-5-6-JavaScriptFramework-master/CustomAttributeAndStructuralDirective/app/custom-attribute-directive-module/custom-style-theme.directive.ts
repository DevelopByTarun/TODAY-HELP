import {Directive, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
  selector: '[appCustomStyleTheme]'
})

export class CustomStyleThemeDirective implements AfterViewInit {

  elementRef:ElementRef;

  constructor(elementRef:ElementRef) {
    this.elementRef = elementRef;
  }

  @Input() colour:string;

  @Input() bg:string;

  @Input() fSize:string;

  @Input() fWeight:string;

  @Input() fStyle:string;

  @Input() fFamily:string;

  @Input() tAlign:string;

  @Input() tTransform:string;

  @Input() bor:string;

  @Input() bColour:string;

  @Input() bStyle:string;

  ngAfterViewInit(): void {
    this.colour = this.colour || 'brown';
    this.bg = this.bg || 'yellow';
    this.fSize = this.fSize || '2em';
    this.fWeight = this.fWeight || 'bolder';
    this.fStyle = this.fStyle || 'normal';
    this.fFamily = this.fFamily || 'monospaced';
    this.tAlign = this.tAlign || 'right';
    this.tTransform = this.tTransform || 'capitalize';
    this.bor = this.bor || '2px';
    this.bColour = this.bColour || 'black';
    this.bStyle = this.bStyle || 'solid';
    this.elementRef.nativeElement.style.color = this.colour;
    this.elementRef.nativeElement.style.backgroundColor = this.bg;
    this.elementRef.nativeElement.style.fontSize = this.fSize;
    this.elementRef.nativeElement.style.fontWeight = this.fWeight;
    this.elementRef.nativeElement.style.fontStyle = this.fStyle;
    this.elementRef.nativeElement.style.fontFamily = this.fFamily;
    this.elementRef.nativeElement.style.textAlign = this.tAlign;
    this.elementRef.nativeElement.style.textTransform = this.tTransform;
    this.elementRef.nativeElement.style.border = this.bor;
    this.elementRef.nativeElement.style.borderColor = this.bColour;
    this.elementRef.nativeElement.style.borderStyle = this.bStyle;
  }

}
