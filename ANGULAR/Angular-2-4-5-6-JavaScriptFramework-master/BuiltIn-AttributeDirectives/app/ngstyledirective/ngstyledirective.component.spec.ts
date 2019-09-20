import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyledirectiveComponent } from './ngstyledirective.component';

describe('NgstyledirectiveComponent', () => {
  let component: NgstyledirectiveComponent;
  let fixture: ComponentFixture<NgstyledirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstyledirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstyledirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
