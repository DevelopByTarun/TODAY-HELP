import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromiseserviceService } from './services/promiseservice.service';
import { ObservableserviceService} from './services/observableservice.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  declarations: [],
  providers: [PromiseserviceService, ObservableserviceService]
})
export class AjaxserviceModule { }
