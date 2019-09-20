import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './shoes/shoes.component';
import { RunnerShoesComponent } from './runner-shoes/runner-shoes.component';
import { SportsShoesComponent } from './sports-shoes/sports-shoes.component';
import { MobileComponent } from './mobile/mobile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuardGuard } from './auth-guard.guard';
import { AuthServiceService } from './auth-service.service';
import { ProductServiceService } from './product-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShoesComponent,
    RunnerShoesComponent,
    SportsShoesComponent,
    MobileComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [AuthGuardGuard, AuthServiceService, ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
