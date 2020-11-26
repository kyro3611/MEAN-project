import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvhighlightsComponent } from './tvhighlights.component';

describe('TvhighlightsComponent', () => {
  let component: TvhighlightsComponent;
  let fixture: ComponentFixture<TvhighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvhighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvhighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
