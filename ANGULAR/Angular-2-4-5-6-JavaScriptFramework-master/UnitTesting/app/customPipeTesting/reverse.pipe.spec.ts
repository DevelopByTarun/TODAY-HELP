import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {

  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('first value should be reversed', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('Tarun')).toEqual('nuraT');
  });

  it('second value should be reversed', () => {
    const reve = new ReversePipe();
    expect(reve.transform('Parve')).toEqual('evraP');
  });

});
