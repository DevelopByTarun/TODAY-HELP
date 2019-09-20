import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { ChangestyleComponent } from './changestyle/changestyle.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { ObjectpropertyComponent } from './objectproperty/objectproperty.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    ChangestyleComponent,
    SelectboxComponent,
    ObjectpropertyComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
