import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyForLoop]'
})

export class MyForLoopDirective {

  private templateRef:TemplateRef<any>;

  private viewContainerRef:ViewContainerRef;

  constructor(templateRef:TemplateRef<any>, viewContainerRef:ViewContainerRef) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }

  @Input('appMyForLoop') set myLoop(num:number) {
    for (let i = 0; i < num; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
