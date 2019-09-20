import { TitlecasePipe } from './titlecase.pipe';

describe('TitlecasePipe', () => {

  it('create an instance', () => {
    const pipe = new TitlecasePipe();
    expect(pipe).toBeTruthy();
  });

  it('input should be in titlecase "this is custom pipe" to "This Is Custom Pipe"', () => {
    const titlecase = new TitlecasePipe();
    expect(titlecase.transform('this is custom pipe')).toBe('This Is Custom Pipe');
  });

});
