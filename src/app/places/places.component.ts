import {Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../store/root.types';
import {PlaceActions} from './store/place.actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {

  @select(['places', 'items']) readonly places$: Observable<any>;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: PlaceActions) {
    ngRedux.dispatch(actions.loadPlaces());
    ngRedux.dispatch(actions.subscribePlaces());
  }

}
