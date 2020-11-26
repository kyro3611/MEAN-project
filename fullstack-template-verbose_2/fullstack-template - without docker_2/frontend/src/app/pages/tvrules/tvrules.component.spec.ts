import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvrulesComponent } from './tvrules.component';

describe('TvrulesComponent', () => {
  let component: TvrulesComponent;
  let fixture: ComponentFixture<TvrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
