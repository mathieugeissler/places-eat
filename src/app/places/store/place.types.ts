export interface IPlace {
  name: string;
  id: string;
  placeId: string;
  users: User[];
  transport?: string;
  creator: User;
  startAt: string;
}

export interface User {
  createdAt?: Date;
  firstName: string;
  id?: string;
}

export interface IPlaceList {
  items: IPlace[];
  loading: boolean;
  error: any;
}
