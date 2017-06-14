import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {MdlDialogService} from '@angular-mdl/core';
import {AddPlaceDialogComponent} from './places/components/add-place-dialog/add-place-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _dialogService: MdlDialogService) {
  }

  ngOnInit(): void {
  }

  addPlace() {
    this._dialogService.showCustomDialog({
      component: AddPlaceDialogComponent,
      isModal: true,
      clickOutsideToClose: true,
      styles: {'width': '500px'},
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    });
  }
}
