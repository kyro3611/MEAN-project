import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvtwitterComponent } from './tvtwitter.component';

describe('TvtwitterComponent', () => {
  let component: TvtwitterComponent;
  let fixture: ComponentFixture<TvtwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvtwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvtwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
