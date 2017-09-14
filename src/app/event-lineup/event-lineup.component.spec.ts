import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLineupComponent } from './event-lineup.component';

describe('EventLineupComponent', () => {
  let component: EventLineupComponent;
  let fixture: ComponentFixture<EventLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
