import {Injectable} from '@angular/core';
import {PlaceActions} from './place.actions';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {PlaceService} from '../services/place.service';
import {IPlace} from './place.types';
import * as moment from 'moment';

@Injectable()
export class PlaceEpics {

  constructor(private service: PlaceService, private actions: PlaceActions) {
  }

  public createEpic() {
    return createEpicMiddleware(
      combineEpics(
        this.createLoadPlaceEpic(),
        this.createAddPlaceEpic(),
        this.createDeletePlaceEpic(),
        this.createSubscribePlaceEpic()
      )
    );
  }

  private createLoadPlaceEpic() {
    return action$ => action$
      .ofType(PlaceActions.LOAD_STARTED)
      .switchMap(a => this.service.getAll()
        .map((data: IPlace[]) => {
          return this.actions.loadSucceeded(data);
        })
        .catch(response => of(this.actions.loadFailed({status: '' + response.status})))
      );
  }

  private createDeletePlaceEpic() {
    return action$ => action$
      .ofType(PlaceActions.DELETE_PLACE)
      .switchMap(a => this.service.deletePlace(a.deleteId)
        .map(data => {
          return {type: 'NOTHING'};
        })
        .catch(response => of(this.actions.deleteFailed({status: '' + response.status})))
      );
  }

  private createAddPlaceEpic() {
    return action$ => action$
      .ofType(PlaceActions.ADD_PLACE)
      .switchMap(a => this.service.addPlace(a.place)
        .map(resp => {
          return {type: 'NOTHING'};
        })
        .catch(response => of(this.actions.addPlaceFailed({status: '' + response.status})))
      );
  }

  private createSubscribePlaceEpic() {
    return action$ => action$
      .ofType(PlaceActions.SUBSCRIBE_PLACES)
      .switchMap(a => this.service.subscribeToPlace()
        .map((sub: any) => {
          switch (sub.mutation) {
            case 'CREATED':
              return this.actions.addPlaceSucceeded(sub.node);
            case 'DELETED':
              return this.actions.deleteSucceeded(sub.previousValues.id);
          }
        })
        .catch(e => of(console.warn(e)))
      )
  }

}
