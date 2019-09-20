import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperlowercasepipeComponent } from './upperlowercasepipe.component';

describe('UpperlowercasepipeComponent', () => {
  let component: UpperlowercasepipeComponent;
  let fixture: ComponentFixture<UpperlowercasepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperlowercasepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperlowercasepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
