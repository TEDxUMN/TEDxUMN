import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersBarComponent } from './speakers-bar.component';

describe('SpeakersBarComponent', () => {
  let component: SpeakersBarComponent;
  let fixture: ComponentFixture<SpeakersBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakersBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
