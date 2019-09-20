import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateDrivenFormsModule } from './template-driven-forms/template-driven-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TemplateDrivenFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
