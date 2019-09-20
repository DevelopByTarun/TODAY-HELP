import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../serviceTesting/data.service';

describe('UserComponent', () => {
  // let component: UserComponent;
  // let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UserComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // this case for create component correctly
  it('should create component correctly', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  // this case for comparison between service name and usercomponent name
  it('should use user name form the service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compo = fixture.debugElement.componentInstance;
    const uservice = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(uservice.user.name).toEqual(compo.user.name);
  });

  // this case for fetch data form dataservice through async
  it('should fetch data successfully if called asyncronously', async(() => {
    const fixture = TestBed.createComponent(UserComponent);
    const compo = fixture.debugElement.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    expect(compo.data).toBe('Data');
    });
  }));

  // for call update method on bt click and return content in p tag
  it('should fire update function on button click', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compo = fixture.debugElement.componentInstance;
    fixture.debugElement.nativeElement.querySelector('#bt').click();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(compo.user.name);
  });

   // this case for display username when logged in
   it('should display username when user logged in', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compo = fixture.debugElement.componentInstance;
    compo.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(compo.user.name);
  });

   // this case for don't display username when not logged in
   it(`should'nt display username when user not logged in`, () => {
    const fixture = TestBed.createComponent(UserComponent);
    const compo = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(compo.user.name);
  });


});
