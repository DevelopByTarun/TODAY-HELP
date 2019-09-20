import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleStyleDirective } from './multiple-style.directive';
import { CustomStyleThemeDirective } from './custom-style-theme.directive';
import { MouseActionDirective } from './mouse-action.directive';
import { AddClassDirective } from './add-class.directive';
import { ClickActionDirective } from './click-action.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultipleStyleDirective, CustomStyleThemeDirective, MouseActionDirective, AddClassDirective, ClickActionDirective],
  exports: [MultipleStyleDirective, CustomStyleThemeDirective, MouseActionDirective, AddClassDirective, ClickActionDirective]
})
export class CustomAttributeDirectiveModuleModule { }
