import { Component } from '@angular/core';

// for access child data
import { ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Exchange through @Input And @ViewChild';

  pmessage: String;
  takeInput(event) {
    this.pmessage = event.target.value;
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild(ChildComponent)
  childComponentObject: ChildComponent;
  // tslint:disable-next-line:member-ordering
  public childmessage: String;
  dataFromChild() {
    this.childmessage = this.childComponentObject.cmessage;
  }
  // childmessage: String = this.childComponentObject.cmessage;
}
