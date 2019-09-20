import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// test suite
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // two main points :-
  // 1. component object creation :- const fixture = TestBed.createComponent(AppComponent);
  // 2. provide component reference :- const app = fixture.debugElement.componentInstance;

  // test cases

  // this case is to check for component creation
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // this case for check message in show function result
  it(`should have a correct message 'this is function show calling'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const result = app.show();
    fixture.detectChanges();
    expect(result).toEqual('this is function show calling');
    // expect(app.title).toEqual('app');
  }));

  // this case for check current date in getDate() function
  it(`should have a correct dt 'new Date().toDateString()'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const currentdt = app.getDate();
    fixture.detectChanges();
    expect(currentdt).toEqual(new Date().toDateString());
  }));

  // this case for check h1 tag value
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Unit Testing in Angular2');
  }));

});
