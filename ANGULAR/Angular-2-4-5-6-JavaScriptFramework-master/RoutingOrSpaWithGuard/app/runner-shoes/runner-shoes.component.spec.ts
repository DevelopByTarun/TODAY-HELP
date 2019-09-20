import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerShoesComponent } from './runner-shoes.component';

describe('RunnerShoesComponent', () => {
  let component: RunnerShoesComponent;
  let fixture: ComponentFixture<RunnerShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnerShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
