import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartableHomeComponent } from './smartable-home.component';

describe('SmartableHomeComponent', () => {
  let component: SmartableHomeComponent;
  let fixture: ComponentFixture<SmartableHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartableHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
