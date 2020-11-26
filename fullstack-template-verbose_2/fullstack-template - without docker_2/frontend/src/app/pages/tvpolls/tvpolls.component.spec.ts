import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvpollsComponent } from './tvpolls.component';

describe('TvpollsComponent', () => {
  let component: TvpollsComponent;
  let fixture: ComponentFixture<TvpollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvpollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvpollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
