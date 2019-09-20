import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstreactiveComponent } from './firstreactive/firstreactive.component';
import { SecondreactiveComponent } from './secondreactive/secondreactive.component';
import { LinkComponent } from './link/link.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { ThirdreactiveComponent } from './thirdreactive/thirdreactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstreactiveComponent,
    SecondreactiveComponent,
    HomeComponent,
    LinkComponent,
    ThirdreactiveComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
