import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// seprate reactive forms module
import { ModelDrivenFormsModule } from './model-driven-forms/model-driven-forms.module';

// for routing
import { RouterModule } from '@angular/router';
import { routing } from './routes-mapping/routes.mapping';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, ModelDrivenFormsModule, RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
