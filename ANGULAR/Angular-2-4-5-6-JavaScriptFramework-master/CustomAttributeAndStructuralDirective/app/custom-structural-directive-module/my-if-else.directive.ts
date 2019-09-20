import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIfElse]'
})
export class MyIfElseDirective {

  private templateRef:TemplateRef<any>;

  private viewContainerRef:ViewContainerRef;

  constructor(templateRef:TemplateRef<any>, viewContainerRef:ViewContainerRef) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }

  @Input() set appMyIfElse(condition:boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else if (!condition) {
      this.viewContainerRef.clear();
    }
  }

}
