import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReversePipe } from './customPipeTesting/reverse.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitlecasePipe } from './customPipeTesting/titlecase.pipe';  // integrate ng-bootstrap in root level
// import {} from 'ngx-bootstrap';   // integrate component of ngx-bootstrap

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ReversePipe,
    TitlecasePipe
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    NgbModule.forRoot()  // calling ng-bootstrap in root level
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
