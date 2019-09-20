import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FirstformComponent } from './firstform/firstform.component';
import { SecondformComponent } from './secondform/secondform.component';
import { ThirdformComponent } from './thirdform/thirdform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FirstformComponent,
    SecondformComponent,
    ThirdformComponent
  ],
  imports: [
    BrowserModule, RoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
