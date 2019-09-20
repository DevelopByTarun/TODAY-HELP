import { Component } from '@angular/core';
import { ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data exchange between parent and child with @ViewChild & @ViewChildren';

  msg: String;
  takeInput(event) {
    this.msg = event.target.value;
  }
  // tslint:disable-next-line:member-ordering
  @ViewChild(ChildComponent)
  childComponentObject: ChildComponent;
  sendToChild() {
    this.childComponentObject.cmessage = this.msg;
  }

  // tslint:disable-next-line:member-ordering
  @ViewChildren(ChildComponent)
  childList: QueryList<ChildComponent>;
  updateChild() {
    this.childList.forEach((child)=> {
      child.cmessage = 'Fuck You ' + child.myProp;
    });
    console.log('Childs Are :: ' + this.childList.length);
  }
}
