import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevToolsExtension, NgRedux} from '@angular-redux/store';
import {IAppState} from './root.types';
import {applyMiddleware, combineReducers} from 'redux';
import {client} from '../app.module';
import {createLogger} from 'redux-logger';
import {RootEpics} from './root.epics';
import {createPlaceReducer} from '../places/store/place.reducer';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    RootEpics
  ]
})
export class StoreModule {

  constructor(public store: NgRedux<IAppState>, devTools: DevToolsExtension, rootEpics: RootEpics) {
    const rootReducer = combineReducers({
      places: createPlaceReducer(),
      apollo: client.reducer() as any
    });

    const enhancers = [
      applyMiddleware(client.middleware()),
    ];

    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    }

    store.configureStore(rootReducer, {}, [createLogger(), ...rootEpics.createEpics()], enhancers);
  }

}
