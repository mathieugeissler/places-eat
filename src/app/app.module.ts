import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ApolloModule} from 'apollo-angular';
import ApolloClient from 'apollo-client/ApolloClient';
import {createNetworkInterface} from 'apollo-client';
import {StoreModule} from './store/store.module';
import {PlacesModule} from './places/places.module';
import {NgReduxModule} from '@angular-redux/store';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {UiModule} from './ui/ui.module';
import {AuthModule} from './auth/auth.module';
import {addGraphQLSubscriptions, SubscriptionClient} from 'subscriptions-transport-ws';
import {environment} from '../environments/environment';

const wsClient = new SubscriptionClient(`wss://subscriptions.graph.cool/v1/cj1jb57c32jsd0123il1ghf90`, {
  reconnect: true
});
const netClient = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj1jb57c32jsd0123il1ghf90'
});

const networkInterfaceWithSub = addGraphQLSubscriptions(netClient, wsClient);

export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSub,
  connectToDevTools: true
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: environment.useUrlHash}),
    NgReduxModule,
    ApolloModule.forRoot(provideClient),
    StoreModule,
    UiModule,
    AuthModule,
    PlacesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
