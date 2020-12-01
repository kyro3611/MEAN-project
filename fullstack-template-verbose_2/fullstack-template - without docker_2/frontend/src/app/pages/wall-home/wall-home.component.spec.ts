import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallHomeComponent } from './wall-home.component';

describe('WallHomeComponent', () => {
  let component: WallHomeComponent;
  let fixture: ComponentFixture<WallHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
