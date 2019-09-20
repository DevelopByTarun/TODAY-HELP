import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisecallComponent } from './promisecall.component';

describe('PromisecallComponent', () => {
  let component: PromisecallComponent;
  let fixture: ComponentFixture<PromisecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
