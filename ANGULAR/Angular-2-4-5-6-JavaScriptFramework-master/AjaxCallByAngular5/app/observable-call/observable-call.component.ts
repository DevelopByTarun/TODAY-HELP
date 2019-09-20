import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { SearchImageService } from '../service-module/ajaxCallService/search-image.service';
import {Image} from '../image';
import { SearchBooksService } from '../service-module/ajaxCallService/search-books.service';
import { Book } from '../book';

@Component({
  selector: 'app-observable-call',
  templateUrl: './observable-call.component.html',
  styleUrls: ['./observable-call.component.css']
})

export class ObservableCallComponent implements OnInit, OnDestroy {

  private searchImage:SearchImageService;

  constructor(searchImage:SearchImageService, searchBook:SearchBooksService) {
    console.log('Constructor Call....');
    this.searchImage = searchImage;
    this.searchBook = searchBook;
    this.isFonty = true;
    this.myColor = 9;
  }

  ngOnInit() {
    console.log('Make Ajax Call...');
  }

  // for search images service
  @Input('prop1') myProp1:string;

  imagesList:Image[] = [];

  searchValue:string;

  takeSearchValue(event) {
    let sv = event.target.value;
    this.searchValue = sv;
  }

  callSearchImageService() {
    this.searchImage.getImagesFromGiphyServer(this.searchValue).subscribe((images)=> {
      this.imagesList = images['data'];
      console.log(images);
    });
  }

  getMultipleCssClasses(flag:string) {
    let classes;
    if(flag == 'reject') {
      classes = {
        'one': true,
        'two': false
      }
    }
    else {
      classes = {
        'one': false,
        'two': true
      }
    }
    return classes;
  }

  // for search books service
  @Input('prop2') myProp2:string;

  @Input('prop4') myProp4:string;

  @Input('prop5') myProp5:string;

  private searchBook:SearchBooksService;

  booksList:Book[] = [];

  callSearchBooksServiceMethodGetAllBooks() {
    this.searchBook.getAllBooksFromServer().subscribe((book)=> {
      this.booksList = book['books'];
      console.log('Books Are :: ',book);
    });
  }

  isFonty:boolean;
  myColor:number;
  category:string;
  year:string;
  booking:Book[];

  takeCategory(event) {
    let c = event.target.value;
    this.category = c;
  }

  takeYear(event) {
    let y = event.target.value;
    this.year = y;
  }

  callSearchBooksServiceMethodFilterBooksByCategoryAndyear(cat:string, yaris:string) {
    cat = this.category;
    yaris = this.year;
    this.searchBook.filterBooksByCategoryAndYearFromServer(cat, yaris).subscribe((data)=> {
      this.booking = data['books'];
      console.log('Filter Data Is :: ',data);
    });
  }


  ngOnDestroy() {
    console.log('Destroy Ajax Call....');
  }

}

