import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSmartphoneComponent } from './vote-smartphone.component';

describe('VoteSmartphoneComponent', () => {
  let component: VoteSmartphoneComponent;
  let fixture: ComponentFixture<VoteSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
