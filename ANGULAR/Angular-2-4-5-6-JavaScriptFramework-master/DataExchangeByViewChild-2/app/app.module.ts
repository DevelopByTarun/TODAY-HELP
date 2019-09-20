import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2moduleModule } from './child2module/child2module.module';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule, Child2moduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
