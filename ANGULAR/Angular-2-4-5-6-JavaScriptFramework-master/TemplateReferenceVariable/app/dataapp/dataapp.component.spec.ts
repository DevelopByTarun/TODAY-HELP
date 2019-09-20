import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataappComponent } from './dataapp.component';

describe('DataappComponent', () => {
  let component: DataappComponent;
  let fixture: ComponentFixture<DataappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
