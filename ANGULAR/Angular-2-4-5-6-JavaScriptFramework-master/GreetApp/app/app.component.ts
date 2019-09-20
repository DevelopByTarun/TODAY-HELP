import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Greet App In Angular 2/4';
  styles: string = 'myStyle';

  firstName: string = '';
  lastName: string = '';
  fullName: string = '';

  takeFirstName(event): void {
    var fn = event.target.value;
    this.firstName = fn;
  }

  takeLastName(event): void {
    var ln = event.target.value;
    this.lastName = ln;
  }

  showFullName(): void {
    this.fullName = this.firstName.concat(this.lastName);
  }

  initUppercase(): void {
    var capitalName = '';
    let name = this.fullName;
    capitalName = name.toUpperCase();
    // this.fullName = this.firstName.concat(this.lastName);
    this.fullName = capitalName;
  }

  intiCapitalize(): void {
    var copName = '';
    let name = this.fullName;
    let names = name.split(" ");
    for(let n of names) {
      copName += n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()+" ";
    }
    //  this.fullName = this.firstName.concat(this.lastName);
     this.fullName = copName;
  }

}
