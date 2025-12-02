import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelListingComponent } from './travel-listing.component';

describe('TravelListingComponent', () => {
  let component: TravelListingComponent;
  let fixture: ComponentFixture<TravelListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
