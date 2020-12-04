import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvvotedoneComponent } from './tvvotedone.component';

describe('TvvotedoneComponent', () => {
  let component: TvvotedoneComponent;
  let fixture: ComponentFixture<TvvotedoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvvotedoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvvotedoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
