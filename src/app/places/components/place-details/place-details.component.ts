import {Component, Input, OnInit} from '@angular/core';
import {IPlace} from '../../store/place.types';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../../store/root.types';
import {PlaceActions} from '../../store/place.actions';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {

  @Input() place: IPlace;

  tabVisible: TabDetails = TabDetails.MAP;

  tablesDetails = {
    MAP: TabDetails.MAP,
    USERS: TabDetails.USERS,
    DETAIL: TabDetails.DETAIL
  };

  constructor(private store: NgRedux<IAppState>, private actions: PlaceActions) {
  }

  ngOnInit() {
  }

  deletePlace() {
    this.store.dispatch(this.actions.deletePlace(this.place.id));
  }

  isVisible(currentTab: TabDetails) {
    return currentTab === this.tabVisible;
  }

  showTab(tab: TabDetails) {
    this.tabVisible = tab;
  }

}

enum TabDetails {
  MAP, USERS, DETAIL
}
