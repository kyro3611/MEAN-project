import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonePlayersComponent } from './smartphone-players.component';

describe('SmartphonePlayersComponent', () => {
  let component: SmartphonePlayersComponent;
  let fixture: ComponentFixture<SmartphonePlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphonePlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
