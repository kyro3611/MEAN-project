import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigbratantvComponent } from './bigbratantv.component';

describe('BigbratantvComponent', () => {
  let component: BigbratantvComponent;
  let fixture: ComponentFixture<BigbratantvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigbratantvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigbratantvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
