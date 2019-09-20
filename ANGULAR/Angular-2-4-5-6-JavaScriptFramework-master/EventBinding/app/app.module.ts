import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InputEventBinding } from './inputEventBinding/inputEvent.component';
import { ClickEventBinding } from './clickEventBinding/clickEvent.component';
import { ChangeEventBinding } from './changeEventBinding/changeEvent.component';

@NgModule({
  declarations: [
    AppComponent, InputEventBinding, ClickEventBinding, ChangeEventBinding
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
