import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../../store/root.types';
import {PlaceActions} from '../../store/place.actions';
import {IPlace} from '../../store/place.types';
import {MdlDialogReference} from '@angular-mdl/core';
import {MdlDatePickerService} from '@angular-mdl/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-add-place-dialog',
  templateUrl: './add-place-dialog.component.html',
  styleUrls: ['./add-place-dialog.component.scss']
})
export class AddPlaceDialogComponent implements OnInit, AfterViewInit {

  public newPlace: IPlace = <IPlace>{
    creator: {
      firstName: ''
    }
  };

  public placeSelected: any;
  public placesFind: any[] = [];
  public selectedDate: moment.Moment;

  public transportList = ['Car', 'Bus', 'Tramway'];

  private autocomplete: any;

  constructor(private store: NgRedux<IAppState>,
              private actions: PlaceActions,
              private dialog: MdlDialogReference,
              private datePicker: MdlDatePickerService) {
    this.autocomplete = new google.maps.places.AutocompleteService();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  addPlace() {
    this.newPlace.name = this.placeSelected.structured_formatting.main_text;
    this.newPlace.placeId = this.placeSelected.place_id;
    this.newPlace.startAt = this.selectedDate.format();
    this.store.dispatch(this.actions.addPlace(this.newPlace));
    this.dialog.hide();
  }

  onAutocompleteChange(search: string) {
    if (search) {
      this.autocomplete.getPlacePredictions(
        {
          input: search,
          types: ['establishment'],
          componentRestrictions: {country: 'fr'}
        }, (predictions, status) => {
          if (status === 'OK') {
            this.placesFind = predictions;
          }
        });
    }
  }

  public pickADate($event: MouseEvent) {
    const selected = this.selectedDate ? this.selectedDate.toDate() : null;
    this.datePicker.selectDate(selected, {openFrom: $event}).subscribe((selectedDate: Date) => {
      this.selectedDate = selectedDate ? moment(selectedDate) : null;
    });
  }

}
