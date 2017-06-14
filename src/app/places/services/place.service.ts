import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {IPlace} from '../store/place.types';
import gql from 'graphql-tag';

@Injectable()
export class PlaceService {

  constructor(private apollo: Apollo) {
  }

  getAll() {
    return this.apollo.watchQuery({
      query: gql`
        query getAllPlaces {
          allPlaces(orderBy: startAt_ASC) {
            id
            name
            placeId
            creator {
              firstName
            }
            startAt
          }
        }
      `
    }).map(({data}: any) => {
      return data.allPlaces;
    });
  }

  deletePlace(placeId: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation removePlace($id: ID!) {
          deletePlace(id: $id) {
            id
          }
        }
      `,
      variables: {
        id: placeId
      }
    }).map(() => placeId);
  }

  addPlace(place: IPlace) {
    return this.apollo.mutate({
      mutation: gql`
        mutation createPlace($name: String!, $placeId: String!, $transport: String!, $startAt: DateTime) {
          createPlace(name: $name, placeId: $placeId, transport: $transport, startAt: $startAt) {
            name
          }
        }
      `,
      variables: {
        name: place.name,
        placeId: place.placeId,
        transport: place.transport,
        startAt: place.startAt
      }
    });
  }

  subscribeToPlace() {
    return this.apollo.subscribe({
      query: gql`
        subscription {
          Place(filter: {mutation_in: [CREATED, UPDATED, DELETED]}) {
            mutation,
            node {
              id
              name
              placeId
              creator {
                firstName
              }
            },
            previousValues {
              id
            }
          }
        }`,
      variables: null
    }).map((resp: any) => {
      return resp.Place;
    });
  }
}
