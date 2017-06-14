import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit, OnDestroy {

  @Input() places: any;

  private sub: any;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
