import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstreactiveComponent } from './firstreactive.component';

describe('FirstreactiveComponent', () => {
  let component: FirstreactiveComponent;
  let fixture: ComponentFixture<FirstreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
