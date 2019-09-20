import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWithProviders } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { DataService } from '../data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CalculatorService, DataService]
})

export class ServicemoduleModule { }
