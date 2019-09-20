import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgclassdirectiveComponent } from './ngclassdirective/ngclassdirective.component';
import { NgstyledirectiveComponent } from './ngstyledirective/ngstyledirective.component';

@NgModule({
  declarations: [
    AppComponent,
    NgclassdirectiveComponent,
    NgstyledirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
