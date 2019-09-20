import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationUsageComponent } from './animation-usage.component';

describe('AnimationUsageComponent', () => {
  let component: AnimationUsageComponent;
  let fixture: ComponentFixture<AnimationUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
