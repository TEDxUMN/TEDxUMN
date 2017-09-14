import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipsPageComponent } from './partnerships-page.component';

describe('PartnershipsPageComponent', () => {
  let component: PartnershipsPageComponent;
  let fixture: ComponentFixture<PartnershipsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
