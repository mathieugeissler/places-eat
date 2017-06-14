import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaceListComponent} from './components/place-list/place-list.component';
import {PlacesComponent} from './places.component';
import {PlaceService} from './services/place.service';
import {PlaceEpics} from './store/place.epics';
import {PlaceActions} from './store/place.actions';
import {FormsModule} from '@angular/forms';
import {PlaceDetailsComponent} from './components/place-details/place-details.component';
import {UiModule} from '../ui/ui.module';
import {AddPlaceDialogComponent} from './components/add-place-dialog/add-place-dialog.component';
import {PlaceDetailsMapComponent} from './components/place-details/place-details-map/place-details-map.component';
import {PlaceDetailsUsersComponent} from './components/place-details/place-details-users/place-details-users.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiModule
  ],
  declarations: [
    PlaceListComponent,
    PlacesComponent,
    PlaceDetailsComponent,
    AddPlaceDialogComponent,
    PlaceDetailsMapComponent,
    PlaceDetailsUsersComponent
  ],
  entryComponents: [
    AddPlaceDialogComponent
  ],
  providers: [
    PlaceService,
    PlaceEpics,
    PlaceActions
  ],
  exports: [
    PlacesComponent,
    AddPlaceDialogComponent
  ]
})
export class PlacesModule {
}
