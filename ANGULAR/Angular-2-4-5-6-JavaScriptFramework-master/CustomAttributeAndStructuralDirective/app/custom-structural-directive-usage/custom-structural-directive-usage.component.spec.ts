import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructuralDirectiveUsageComponent } from './custom-structural-directive-usage.component';

describe('CustomStructuralDirectiveUsageComponent', () => {
  let component: CustomStructuralDirectiveUsageComponent;
  let fixture: ComponentFixture<CustomStructuralDirectiveUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStructuralDirectiveUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStructuralDirectiveUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
