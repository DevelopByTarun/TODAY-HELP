import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIfDirective } from './my-if.directive';
import { MyIfElseDirective } from './my-if-else.directive';
import { MyForLoopDirective } from './my-for-loop.directive';
import { MySetTimeoutDirective } from './my-set-timeout.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyIfDirective, MyIfElseDirective, MyForLoopDirective, MySetTimeoutDirective],
  exports: [MyIfDirective, MyIfElseDirective, MyForLoopDirective, MySetTimeoutDirective]
})
export class CustomStructuralDirectiveModuleModule { }
