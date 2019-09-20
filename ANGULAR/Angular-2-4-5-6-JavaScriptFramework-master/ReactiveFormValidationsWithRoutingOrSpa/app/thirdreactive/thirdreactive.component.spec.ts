import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdreactiveComponent } from './thirdreactive.component';

describe('ThirdreactiveComponent', () => {
  let component: ThirdreactiveComponent;
  let fixture: ComponentFixture<ThirdreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
