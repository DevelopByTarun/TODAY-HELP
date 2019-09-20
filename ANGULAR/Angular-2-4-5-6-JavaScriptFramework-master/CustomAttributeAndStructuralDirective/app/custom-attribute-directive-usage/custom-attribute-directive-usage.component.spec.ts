import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAttributeDirectiveUsageComponent } from './custom-attribute-directive-usage.component';

describe('CustomAttributeDirectiveUsageComponent', () => {
  let component: CustomAttributeDirectiveUsageComponent;
  let fixture: ComponentFixture<CustomAttributeDirectiveUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAttributeDirectiveUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAttributeDirectiveUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
