import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildoneComponent } from './childone/childone.component';
import { FormsModule } from '@angular/forms';
import { ChildtwoComponent } from './childtwo/childtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildoneComponent,
    ChildtwoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
