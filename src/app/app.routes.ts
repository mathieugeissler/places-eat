import {Routes} from '@angular/router';
import {PlacesComponent} from './places/places.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'places', pathMatch: 'full'
  },
  {
    path: 'places', component: PlacesComponent
  }
];
