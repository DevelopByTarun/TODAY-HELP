import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersrelatedpipeComponent } from './numbersrelatedpipe.component';

describe('NumbersrelatedpipeComponent', () => {
  let component: NumbersrelatedpipeComponent;
  let fixture: ComponentFixture<NumbersrelatedpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersrelatedpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersrelatedpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
