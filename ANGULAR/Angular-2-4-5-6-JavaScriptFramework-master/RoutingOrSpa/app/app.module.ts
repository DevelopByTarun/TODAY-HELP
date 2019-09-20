import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { DescComponent } from './desc/desc.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';

// contact module
import { ContactmoduleModule } from './contactmodule/contactmodule.module';

// service module
import { ServicemoduleModule } from './servicemodule/servicemodule.module';

// for routing or spa
import { RouterModule } from '@angular/router';
import { routing } from './routes.mapping';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    NewsComponent,
    ErrorComponent,
    DescComponent
  ],
  imports: [
    BrowserModule, ContactmoduleModule, ServicemoduleModule, RouterModule.forRoot(routing), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
