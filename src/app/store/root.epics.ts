import {Injectable} from '@angular/core';
import {PlaceEpics} from '../places/store/place.epics';

@Injectable()
export class RootEpics {

  constructor(private placeEpics: PlaceEpics) {
  }

  public createEpics() {
    return [
      this.placeEpics.createEpic()
    ];
  }

}
