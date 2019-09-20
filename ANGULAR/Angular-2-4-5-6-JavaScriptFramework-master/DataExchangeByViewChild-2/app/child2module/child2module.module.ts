import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from '../child2/child2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Child2Component],
  exports: [Child2Component]
})
export class Child2moduleModule { }
