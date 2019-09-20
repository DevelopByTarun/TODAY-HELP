import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {SearchImageService} from './ajaxCallService/search-image.service';
import { SearchBooksService } from './ajaxCallService/search-books.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, HttpModule
  ],
  declarations: [],
  providers: [SearchImageService, SearchBooksService]
})
export class ServiceModuleModule { }
