import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentProperty } from './componentPropertyBinding/componentProperty.component';
import { ElementProperty } from './elementPropertyBinding/elementProperty.component';
import { DirectiveProperty } from './directivePropertyBinding/directiveProperty.component';

@NgModule({
  declarations: [
    AppComponent, ComponentProperty, ElementProperty, DirectiveProperty
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
