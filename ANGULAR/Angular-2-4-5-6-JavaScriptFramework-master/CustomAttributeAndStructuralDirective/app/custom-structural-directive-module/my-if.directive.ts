import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  private templateRef:TemplateRef<any>;

  private viewContainerRef:ViewContainerRef;

  constructor(templateRef:TemplateRef<any>, viewContainerRef:ViewContainerRef) {
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
  }

  @Input() set appMyIf(condition:boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainerRef.clear();
    }
  }

}
