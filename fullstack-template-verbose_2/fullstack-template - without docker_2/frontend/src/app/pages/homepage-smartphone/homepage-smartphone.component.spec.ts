import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSmartphoneComponent } from './homepage-smartphone.component';

describe('HomepageSmartphoneComponent', () => {
  let component: HomepageSmartphoneComponent;
  let fixture: ComponentFixture<HomepageSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
