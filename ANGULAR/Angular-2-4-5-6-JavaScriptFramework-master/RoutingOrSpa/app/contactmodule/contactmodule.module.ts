import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// these components declare in contact module
import { ContactusComponent } from '../contactus/contactus.component';
import { OfficeComponent } from '../office/office.component';
import { CorpofficeComponent } from '../corpoffice/corpoffice.component';

// for nested routing router outlet in these components
import { RouterModule } from '@angular/router';
import { routing } from '../routes.mapping';

// service module
import { ServicemoduleModule } from '../servicemodule/servicemodule.module';

@NgModule({
  imports: [
    CommonModule, ServicemoduleModule, RouterModule.forRoot(routing), FormsModule
  ],
  declarations: [ContactusComponent, OfficeComponent, CorpofficeComponent],
  exports: [ContactusComponent, OfficeComponent, CorpofficeComponent]
})

export class ContactmoduleModule { }
