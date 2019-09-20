import {Routes} from '@angular/router';
import { FormControlComponent } from '../model-driven-forms/form-control/form-control.component';
import { FormGroupComponent } from '../model-driven-forms/form-group/form-group.component';

export const routing:Routes = [

  {
    path: '',
    component: FormControlComponent
  },

  {
    path: 'fgroup',
    component: FormGroupComponent
  }

];
