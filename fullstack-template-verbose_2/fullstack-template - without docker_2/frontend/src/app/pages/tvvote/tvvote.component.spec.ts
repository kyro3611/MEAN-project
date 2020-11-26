import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvvoteComponent } from './tvvote.component';

describe('TvvoteComponent', () => {
  let component: TvvoteComponent;
  let fixture: ComponentFixture<TvvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
