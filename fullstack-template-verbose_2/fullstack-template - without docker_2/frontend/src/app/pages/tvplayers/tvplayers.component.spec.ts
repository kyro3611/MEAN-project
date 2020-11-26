import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvplayersComponent } from './tvplayers.component';

describe('TvplayersComponent', () => {
  let component: TvplayersComponent;
  let fixture: ComponentFixture<TvplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
