// for assign routes
import { Routes } from '@angular/router';

// components
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CorpofficeComponent } from './corpoffice/corpoffice.component';
import { ErrorComponent } from './error/error.component';
import { NewsComponent } from './news/news.component';
import { OfficeComponent } from './office/office.component';
import { DescComponent } from './desc/desc.component';

// routes mapping
export const routing: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'aboutus/:name/:job',   // dynamic linking
    component: AboutusComponent
  },

  {
    path: 'news/:type/:subtype',
    component: NewsComponent
  },

  {
    path: 'contactus',
    component: ContactusComponent,
    children: [
      {
        path: 'office/:area/:state/:country/:pincode',             // nested routing
        component: OfficeComponent
      },
      {
        path: 'corpoffice/:area/:state/:country/:pincode',       // nested routing
        component: CorpofficeComponent
      },
    ]
  },

  {
    path: 'description/:title',   // dynamic linking
    component: DescComponent
  },

  {
    path: 'error',
    component: ErrorComponent
  },

  {
    path: '**',
    redirectTo: 'error'
  }

];
