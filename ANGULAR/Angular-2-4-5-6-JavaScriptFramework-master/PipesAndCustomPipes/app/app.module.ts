import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpperlowercasepipeComponent } from './upperlowercasepipe/upperlowercasepipe.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { SlicepipeComponent } from './slicepipe/slicepipe.component';
import { JsonpipeComponent } from './jsonpipe/jsonpipe.component';
import { NumbersrelatedpipeComponent } from './numbersrelatedpipe/numbersrelatedpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { ExponentialstrengthPipe } from './exponentialstrength.pipe';
import { PortionPipe } from './portion.pipe';
import { MyjsonPipe } from './myjson.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpperlowercasepipeComponent,
    DatepipeComponent,
    SlicepipeComponent,
    JsonpipeComponent,
    NumbersrelatedpipeComponent,
    CustompipeComponent,
    ExponentialstrengthPipe,
    PortionPipe,
    MyjsonPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
