import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateDrivenFormValidationComponent } from './template-driven-form-validation/template-driven-form-validation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [TemplateDrivenFormComponent, TemplateDrivenFormValidationComponent],
  exports: [TemplateDrivenFormComponent, TemplateDrivenFormValidationComponent]
})
export class TemplateDrivenFormsModule { }
