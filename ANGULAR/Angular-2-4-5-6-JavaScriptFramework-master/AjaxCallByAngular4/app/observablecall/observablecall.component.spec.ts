import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablecallComponent } from './observablecall.component';

describe('ObservablecallComponent', () => {
  let component: ObservablecallComponent;
  let fixture: ComponentFixture<ObservablecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
