import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-place-details-map',
  templateUrl: './place-details-map.component.html',
  styleUrls: ['./place-details-map.component.scss']
})
export class PlaceDetailsMapComponent implements OnInit, AfterViewInit {

  @Input() placeId: number;

  @ViewChild('map')
  private mapElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.mapElement.nativeElement.id = 'maps-' + this.placeId;
    const geocoder = new google.maps.Geocoder();
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: -34.397, lng: 150.644}
    });

    geocoder.geocode({placeId: this.placeId}, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      }
    })
  }

}
