import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCloudXComponent } from './word-cloud-x.component';

describe('WordCloudXComponent', () => {
  let component: WordCloudXComponent;
  let fixture: ComponentFixture<WordCloudXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCloudXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
