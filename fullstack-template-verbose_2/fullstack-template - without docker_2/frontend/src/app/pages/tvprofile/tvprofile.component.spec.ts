import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvprofileComponent } from './tvprofile.component';

describe('TvprofileComponent', () => {
  let component: TvprofileComponent;
  let fixture: ComponentFixture<TvprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
