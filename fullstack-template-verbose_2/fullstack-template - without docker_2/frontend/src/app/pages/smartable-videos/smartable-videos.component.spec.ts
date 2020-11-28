import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartableVideosComponent } from './smartable-videos.component';

describe('SmartableVideosComponent', () => {
  let component: SmartableVideosComponent;
  let fixture: ComponentFixture<SmartableVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartableVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartableVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
