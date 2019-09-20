import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-attribute-directive-usage',
  templateUrl: './custom-attribute-directive-usage.component.html',
  styleUrls: ['./custom-attribute-directive-usage.component.css']
})
export class CustomAttributeDirectiveUsageComponent implements OnInit {

  constructor() {
    this.colorList = ['red', 'blue', 'orange', 'silver', 'brown', 'grey', 'aqua', 'green', 'olive', 'maroon'];
    this.bgcolorList = ['aquamarine', 'peachpuff', 'yellow', 'moccasin', 'limegreen', 'lightpink', 'khaki', 'cornsilk'];
    this.fntfamilyList = ['cursive', 'monospaced', 'arialblack', 'verdana', 'waseem', 'webdings', 'times', 'tahoma', 'georgia', 'serif'];
    this.bodcolorList = ['red', 'blue', 'orange', 'silver', 'brown', 'grey', 'aqua', 'green', 'olive', 'maroon'];
    this.bodstyleList = ['groove', 'dotted', 'dashed', 'double', 'inset', 'unset', 'outset', 'ridge', 'solid', 'wave'];
    this.coloryList = ['red', 'blue', 'orange', 'silver', 'brown', 'grey', 'aqua', 'green', 'olive', 'maroon'];
    this.bgcoloryList = ['aquamarine', 'peachpuff', 'yellow', 'moccasin', 'limegreen', 'lightpink', 'khaki', 'cornsilk'];
    this.fontyList = ['cursive', 'monospaced', 'arialblack', 'verdana', 'waseem', 'webdings', 'times', 'tahoma', 'georgia', 'serif'];
  }

  ngOnInit() {
  }

  @Input('prop1') myProp1:string;

  // for mouse action directive

  colorList:Array<string>;
  mycolor:string;

  bgcolorList:Array<string>;
  mybgcolor:string;

  fntfamilyList:Array<string>;
  myfntfamily:string;

  fntsize:string;

  fntweight:string;
  takeFontWeight(event) {
    let fnt = event.target.value;
    this.fntweight = fnt;
  }

  fntstyle:string;
  takeFontStyle(event) {
    let sty = event.target.value;
    this.fntstyle = sty;
  }

  txtalign:string;
  takeTextAlign(event) {
    let txta = event.target.value;
    this.txtalign = txta;
  }

  txttransform:string;
  takeTextTransform(event) {
    let txtt = event.target.value;
    this.txttransform = txtt;
  }

  bod:string;

  bodcolorList:Array<string>;
  mybordercolor:string;

  bodstyleList:Array<string>;
  myborderstyle:string;


  // for add click action directive

  coloryList:Array<string>;
  colory:string;

  bgcoloryList:Array<string>;
  bgcolory:string;

  fontyList:Array<string>;
  fonty:string;

  fontysize:string;
  flagValue:string;

}












