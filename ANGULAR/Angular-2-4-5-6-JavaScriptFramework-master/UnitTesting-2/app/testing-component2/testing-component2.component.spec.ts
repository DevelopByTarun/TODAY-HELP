import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';
import { TestingComponent2Component } from './testing-component2.component';
import {UserService} from '../user.service';
import { DataService } from '../data.service';

describe('Initialize Component Name Is :: TestingComponent2', ()=> {
  // let fixture:ComponentFixture<TestingComponent2Component>;
  // let testComp2;
  // let compiled;
  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [TestingComponent2Component]
    });
    // fixture = TestBed.createComponent(TestingComponent2Component);
    // testComp2 = fixture.debugElement.componentInstance;
    // compiled = fixture.debugElement.nativeElement;
  });

  it('Should Create The Component Name TestingComponent2', async(()=> {
    let fixture = TestBed.createComponent(TestingComponent2Component);
    fixture.detectChanges();
    let testComp2 = fixture.debugElement.componentInstance;
    expect(testComp2).toBeTruthy();
  }));

  it('Should Use The User Name Form The Service', async(()=> {
    let fixture = TestBed.createComponent(TestingComponent2Component);
    let testComp2 = fixture.debugElement.componentInstance;
    let userServiceInstance = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(testComp2.user.name).toEqual(userServiceInstance.user.name);
  }));

  it('Should Fire UpdateValue() Function On Button Click', async(()=> {
    let fixture = TestBed.createComponent(TestingComponent2Component);
    let testComp2 = fixture.debugElement.componentInstance;
    fixture.debugElement.nativeElement('mybtn').click();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    let result = compiled.querySelector('h5').textContent;
    expect(result).toContain(testComp2.user.name);
  }));

  it('Should Display The User Name If User Is Logged In', () => {
    let fixture = TestBed.createComponent(TestingComponent2Component);
    let testComp2 = fixture.debugElement.componentInstance;
    testComp2.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain(testComp2.user.name);
  });

  it('Shouldn\'t Display The User Name If User Is Not Logged In', () => {
    let fixture = TestBed.createComponent(TestingComponent2Component);
    let testComp2 = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).not.toContain(testComp2.user.name);
  });

  it('Should Fetch Data Successfully If Called Asynchronously', async(() => {
    let fixture = TestBed.createComponent(TestingComponent2Component);
    let testComp2 = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDataService')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(testComp2.data).toBe('Data');
    });
  }));

});
