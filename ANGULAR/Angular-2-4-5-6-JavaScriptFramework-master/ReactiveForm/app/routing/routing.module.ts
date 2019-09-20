import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BasicReactiveFormComponent } from '../basic-reactive-form/basic-reactive-form.component';
import { NestedFormArrayComponent } from '../nested-form-array/nested-form-array.component';
import { NestedFormGroupComponent } from '../nested-form-group/nested-form-group.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'brf', component: BasicReactiveFormComponent },
  { path: 'nfg', component: NestedFormGroupComponent },
  { path: 'nfa', component: NestedFormArrayComponent },
  { path: '**', redirectTo: '' }
// tslint:disable-next-line:semicolon
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
