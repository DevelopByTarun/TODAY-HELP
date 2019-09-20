import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromisecallComponent } from './promisecall/promisecall.component';
import { ObservablecallComponent } from './observablecall/observablecall.component';
import { AjaxserviceModule } from './ajaxservice/ajaxservice.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PromisecallComponent,
    ObservablecallComponent
  ],
  imports: [
    BrowserModule, AjaxserviceModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
