import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvlivestreamsComponent } from './tvlivestreams.component';

describe('TvlivestreamsComponent', () => {
  let component: TvlivestreamsComponent;
  let fixture: ComponentFixture<TvlivestreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvlivestreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvlivestreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
