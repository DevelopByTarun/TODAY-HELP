import { TestBed, async } from '@angular/core/testing';
import { TestingComponent1Component } from './testing-component1.component';

// create suite

describe('Name Of The Component Is TestingComponent1 And It Should be Testing', ()=> {
  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [TestingComponent1Component]
    });
  });

  // test case no.1
  it('It Should Create TestingComponent1', async(()=> {
    let fixture = TestBed.createComponent(TestingComponent1Component); // component object
    fixture.detectChanges();
    let testComp1 = fixture.debugElement.componentInstance;  // component reference
    expect(testComp1).toBeTruthy();
  }));

  // test case no.2
  it("It Should Have As Correct Subtitle :: 'Testing Component 1'", async(()=> {
    let fixture = TestBed.createComponent(TestingComponent1Component);
    fixture.detectChanges();
    let testComp1 = fixture.debugElement.componentInstance;
    let result = testComp1.subtitle;
    expect(result).toEqual('Testing Component 1');
  }));

  // test case no.3
  it('It Should Render A Subtitle In h2 Tag', async(()=> {
    let fixture = TestBed.createComponent(TestingComponent1Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    // if you change toContain value the test is going to fail
    expect(compiled.querySelector('h2').textContent).toContain('Testing Component 1');
  }));

  // test case no.4
  it("It Should Have As Correct Value Of Message Variable :: 'This Is The Value Of Message Variable'", async(()=> {
    let fixture = TestBed.createComponent(TestingComponent1Component);
    fixture.detectChanges();
    let testComp1 = fixture.debugElement.componentInstance;
    let result = testComp1.showMessage();
    expect(result).toEqual('This Is The Value Of Message Variable');
  }));

  // test case no.5
  it("Value Of Message Variable Render In h4 Tag", async(()=> {
    let fixture = TestBed.createComponent(TestingComponent1Component);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('This Is The Value Of Message Variable');
  }));

});
