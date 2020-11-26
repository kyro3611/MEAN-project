import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterSmartphoneComponent } from './twitter-smartphone.component';

describe('TwitterSmartphoneComponent', () => {
  let component: TwitterSmartphoneComponent;
  let fixture: ComponentFixture<TwitterSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
