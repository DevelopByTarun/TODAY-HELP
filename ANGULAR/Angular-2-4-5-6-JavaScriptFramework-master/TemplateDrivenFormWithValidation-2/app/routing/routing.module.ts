import { ThirdformComponent } from '../thirdform/thirdform.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FirstformComponent } from '../firstform/firstform.component';
import { SecondformComponent } from '../secondform/secondform.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: '1stfm', component: FirstformComponent },
  { path: '2ndfm', component: SecondformComponent },
  { path: '3rdfm', component: ThirdformComponent },
  { path: '**', redirectTo: '' }
// tslint:disable-next-line:semicolon
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
