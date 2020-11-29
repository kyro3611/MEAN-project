import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteDoneSmartphoneComponent } from './vote-done-smartphone.component';

describe('VoteDoneSmartphoneComponent', () => {
  let component: VoteDoneSmartphoneComponent;
  let fixture: ComponentFixture<VoteDoneSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteDoneSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteDoneSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
