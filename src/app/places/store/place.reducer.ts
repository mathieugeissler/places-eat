import {IPlaceList} from './place.types';
import {PlaceActions} from './place.actions';

const INITIAL_STATE: IPlaceList = {
  items: [],
  loading: false,
  error: null
};

export function createPlaceReducer() {
  return function placeReducer(state: IPlaceList = INITIAL_STATE, action: any): IPlaceList {

    switch (action.type) {
      case PlaceActions.LOAD_STARTED:
        return {
          items: [],
          loading: true,
          error: null
        };
      case PlaceActions.LOAD_SUCCEEDED:
        return {
          items: action.payload,
          loading: false,
          error: null
        };
      case PlaceActions.LOAD_FAILED:
        return {
          items: [],
          loading: false,
          error: action.error
        };
      case PlaceActions.ADD_PLACE:
        return {
          items: state.items,
          loading: true,
          error: null
        };
      case PlaceActions.ADD_PLACE_SUCCEEDED:
        return {
          items: [...state.items, action.place],
          loading: false,
          error: null
        };
      case PlaceActions.ADD_PLACE_FAILED:
        return {
          items: state.items,
          loading: false,
          error: action.error
        };
      case PlaceActions.DELETE_PLACE:
        return {
          items: state.items,
          loading: true,
          error: null
        };
      case PlaceActions.DELETE_PLACE_SUCCEEDED:
        return {
          items: state.items.filter(place => place.id !== action.deleteId),
          loading: false,
          error: null
        };
      case PlaceActions.DELETE_PLACE_FAILED:
        return {
          items: state.items,
          loading: false,
          error: action.error
        };
      default:
        return state;
    }

  };
}
