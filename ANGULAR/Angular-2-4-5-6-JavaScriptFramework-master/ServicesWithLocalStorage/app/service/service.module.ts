import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../items.service';
import { CalcService } from '../calc.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ItemsService, CalcService]
})
export class ServiceModule { }
