import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../store/place.types';

@Component({
  selector: 'app-place-details-users',
  templateUrl: './place-details-users.component.html',
  styleUrls: ['./place-details-users.component.scss']
})
export class PlaceDetailsUsersComponent implements OnInit {

  @Input() creator: User;
  @Input() users: User[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
