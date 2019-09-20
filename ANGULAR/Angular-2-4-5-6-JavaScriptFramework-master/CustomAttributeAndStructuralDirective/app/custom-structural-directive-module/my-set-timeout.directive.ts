import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMySetTimeout]'
})
export class MySetTimeoutDirective {

  private templateRef:TemplateRef<any>;

  private viewContainerRef:ViewContainerRef;

  constructor(templateRef:TemplateRef<any>, viewContainerRef:ViewContainerRef) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }

  @Input('appMySetTimeout') set myTimeout(delay:number) {
    this.viewContainerRef.clear();
    setTimeout(()=> {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, delay);
  }

}
