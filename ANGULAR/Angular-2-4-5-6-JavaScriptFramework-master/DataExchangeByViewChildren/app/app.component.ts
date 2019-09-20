import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Exchange Between Components Through @ViewChildren & QueryList';

  @ViewChildren(ChildComponent)
  // viewChildren: QueryList<ChildComponent>;
  childList: QueryList<ChildComponent>;

  updateChild() {
    this.childList.forEach(
      (child) => {
        child.setTime(new Date().toTimeString());
      }
    );
    // this.viewChildren.toArray().forEach((child)=> child.setTime(new Date().toTimeString()));
    console.log('Childs Are :: ' + this.childList.length);
  }
}
