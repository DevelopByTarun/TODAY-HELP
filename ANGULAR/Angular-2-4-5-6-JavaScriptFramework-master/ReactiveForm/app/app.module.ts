import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';   // step 1
import { AppComponent } from './app.component';
import { BasicReactiveFormComponent } from './basic-reactive-form/basic-reactive-form.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { TriggerComponent } from './trigger/trigger.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicReactiveFormComponent,
    NestedFormGroupComponent,
    NestedFormArrayComponent,
    TriggerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RoutingModule, ReactiveFormsModule  // step 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
