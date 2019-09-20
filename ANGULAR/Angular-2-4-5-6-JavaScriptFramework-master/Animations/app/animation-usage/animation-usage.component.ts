import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ON_OF_ANIMATION } from '../on-off-animation';
import { ON_OF_ANIMATION1 } from '../on-off-animation1';
import { ON_OF_ANIMATION2 } from '../on-off-animationWithStyle';
import { ON_OF_ANIMATION3 } from '../on-off-animationWithKeyframesAndStyle';
import { ROTATE_ANIMATION } from '../rotate-animationWithKeyframesAndStyle';
import { SHOW_HIDE_ANIMATION } from '../show-hide-animation';

@Component({
  selector: 'app-animation-usage',
  templateUrl: './animation-usage.component.html',
  styleUrls: ['./animation-usage.component.css'],
  animations: [
    ON_OF_ANIMATION,
    ON_OF_ANIMATION1,
    ON_OF_ANIMATION2,
    ON_OF_ANIMATION3,
    ROTATE_ANIMATION,
    SHOW_HIDE_ANIMATION
  ]
})

export class AnimationUsageComponent implements OnInit {

  constructor() {
    this.state1 = 'off';
    this.bookId = 'click this book';
  }

  ngOnInit() {
  }

  // noinspection TsLint
  public state1:string;

  toggleState1() {
    this.state1 = (this.state1 === 'on'? 'off':'on');
  }

  bookList:Book[] = [];
  book:Book;
  bookId:string;
  bookName:string;
  bookState:string;

  addBook() {
    let id = this.bookId;
    let name = this.bookName;
    let stats = this.bookState;
    this.book = new Book(id, name, stats);
    this.bookList.push(this.book);
    console.log('Book Is :: ',this.book);
  }

  toggleBook(book:Book) {
    book.state = (book.state === 'active')? 'inactive':'active';
  }

  toggleBook2(book2:Book) {
    book2.state = (book2.state === 'resolve')? 'reject':'resolve';
  }

  toggleBookWithKeyFrames(book3:Book) {
    book3.state = (book3.state === 'true')? 'false':'true';
  }

  toggleBookWithRotateAndKeyframes(book4:Book) {
    book4.state = (book4.state === 'change')? 'unChange':'change';
  }

  public showhidestate:string;

  toggleShowHide() {
    this.showhidestate = (this.showhidestate === 'hide')? 'show':'hide';
  }

}


