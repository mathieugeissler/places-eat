import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailsMapComponent } from './place-details-map.component';

describe('PlaceDetailsMapComponent', () => {
  let component: PlaceDetailsMapComponent;
  let fixture: ComponentFixture<PlaceDetailsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDetailsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
