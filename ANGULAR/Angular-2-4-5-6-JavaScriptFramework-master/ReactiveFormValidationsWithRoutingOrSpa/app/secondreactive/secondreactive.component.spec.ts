import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondreactiveComponent } from './secondreactive.component';

describe('SecondreactiveComponent', () => {
  let component: SecondreactiveComponent;
  let fixture: ComponentFixture<SecondreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
