import {Injectable} from '@angular/core';
import {IPlace} from './place.types';

@Injectable()
export class PlaceActions {

  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  static readonly ADD_PLACE = 'ADD_PLACE';
  static readonly ADD_PLACE_SUCCEEDED = 'ADD_PLACE_SUCCEEDED';
  static readonly ADD_PLACE_FAILED = 'ADD_PLACE';

  static readonly DELETE_PLACE = 'DELETE_PLACE';
  static readonly DELETE_PLACE_SUCCEEDED = 'DELETE_PLACE_SUCCEEDED';
  static readonly DELETE_PLACE_FAILED = 'DELETE_PLACE_FAILED';

  static readonly SUBSCRIBE_PLACES = 'SUBSCRIBE_PLACES';

  subscribePlaces() {
    return {
      type: PlaceActions.SUBSCRIBE_PLACES
    };
  }

  loadPlaces() {
    return {
      type: PlaceActions.LOAD_STARTED
    };
  }

  loadSucceeded(payload) {
    return {
      type: PlaceActions.LOAD_SUCCEEDED,
      payload
    };
  }

  loadFailed(error: any) {
    return {
      type: PlaceActions.LOAD_FAILED,
      error
    };
  }

  deletePlace(id: string) {
    return {
      type: PlaceActions.DELETE_PLACE,
      deleteId: id
    };
  }

  deleteFailed(error: any) {
    return {
      type: PlaceActions.DELETE_PLACE_FAILED,
      error
    };
  }

  deleteSucceeded(id: string) {
    return {
      type: PlaceActions.DELETE_PLACE_SUCCEEDED,
      deleteId: id
    };
  }

  addPlace(place: IPlace) {
    return {
      type: PlaceActions.ADD_PLACE,
      place: place
    };
  }

  addPlaceSucceeded(place: IPlace) {
    return {
      type: PlaceActions.ADD_PLACE_SUCCEEDED,
      place: place
    };
  }

  addPlaceFailed(error: any) {
    return {
      type: PlaceActions.ADD_PLACE_FAILED,
      error
    };
  }
}
