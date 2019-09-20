import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassdirectiveComponent } from './ngclassdirective.component';

describe('NgclassdirectiveComponent', () => {
  let component: NgclassdirectiveComponent;
  let fixture: ComponentFixture<NgclassdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
