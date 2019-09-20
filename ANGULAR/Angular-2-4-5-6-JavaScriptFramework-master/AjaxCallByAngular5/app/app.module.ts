import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableCallComponent } from './observable-call/observable-call.component';
import { FormsModule } from '@angular/forms';
import { ServiceModuleModule } from './service-module/service-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ObservableCallComponent
  ],
  imports: [
    BrowserModule, FormsModule, ServiceModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
