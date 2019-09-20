import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FirstreactiveComponent } from '../firstreactive/firstreactive.component';
import { SecondreactiveComponent } from '../secondreactive/secondreactive.component';
import { ThirdreactiveComponent } from '../thirdreactive/thirdreactive.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: FirstreactiveComponent },
  { path: 'second', component: SecondreactiveComponent },
  { path: 'third', component: ThirdreactiveComponent },
  { path: '**', redirectTo: '' }
// tslint:disable-next-line:semicolon
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
