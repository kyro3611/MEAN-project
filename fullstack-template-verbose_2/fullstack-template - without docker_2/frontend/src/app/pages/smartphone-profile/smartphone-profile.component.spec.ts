import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneProfileComponent } from './smartphone-profile.component';

describe('SmartphoneProfileComponent', () => {
  let component: SmartphoneProfileComponent;
  let fixture: ComponentFixture<SmartphoneProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
