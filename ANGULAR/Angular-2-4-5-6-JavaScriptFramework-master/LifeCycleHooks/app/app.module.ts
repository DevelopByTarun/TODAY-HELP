import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { FormsModule } from '@angular/forms';
import { NgOnInitNgOnDestroyComponent } from './ng-on-init-ng-on-destroy/ng-on-init-ng-on-destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    NgOnChangesComponent,
    NgOnInitNgOnDestroyComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
