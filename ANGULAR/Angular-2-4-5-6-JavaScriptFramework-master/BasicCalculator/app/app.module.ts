import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatInputModule, MatButtonModule } from '@angular/material';
// import '~@angular/material/prebuilt-themes/indigo-pink.css';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
