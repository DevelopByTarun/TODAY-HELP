import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomAttributeDirectiveModuleModule } from './custom-attribute-directive-module/custom-attribute-directive-module.module';
import { CustomStructuralDirectiveModuleModule } from './custom-structural-directive-module/custom-structural-directive-module.module';
import { CustomAttributeDirectiveUsageComponent } from './custom-attribute-directive-usage/custom-attribute-directive-usage.component';
import { CustomStructuralDirectiveUsageComponent } from './custom-structural-directive-usage/custom-structural-directive-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomAttributeDirectiveUsageComponent,
    CustomStructuralDirectiveUsageComponent
  ],
  imports: [
    BrowserModule, FormsModule, CustomAttributeDirectiveModuleModule, CustomStructuralDirectiveModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
