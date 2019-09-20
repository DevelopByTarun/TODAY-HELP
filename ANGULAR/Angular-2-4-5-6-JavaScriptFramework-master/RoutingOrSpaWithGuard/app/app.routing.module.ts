import { NgModule, Component } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShoesComponent } from './shoes/shoes.component';
import { RunnerShoesComponent } from './runner-shoes/runner-shoes.component';
import { SportsShoesComponent } from './sports-shoes/sports-shoes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes = [
    { path: '', component: HomeComponent},
    { path: 'shoes', component: ShoesComponent, canActivate: [AuthGuardGuard]},
    { path: 'runshoes', component: RunnerShoesComponent, children: [{ path: 'sportshoes', component: SportsShoesComponent}]},
    { path: 'mobiles', component: MobileComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: '<h1>data not found!!</h1>'}},
    { path: '**', redirectTo: '/not-found'}
// tslint:disable-next-line:semicolon
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
