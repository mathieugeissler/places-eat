import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailsUsersComponent } from './place-details-users.component';

describe('PlaceDetailsUsersComponent', () => {
  let component: PlaceDetailsUsersComponent;
  let fixture: ComponentFixture<PlaceDetailsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDetailsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDetailsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
