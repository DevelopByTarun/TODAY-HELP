import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectpropertyComponent } from './objectproperty.component';

describe('ObjectpropertyComponent', () => {
  let component: ObjectpropertyComponent;
  let fixture: ComponentFixture<ObjectpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
