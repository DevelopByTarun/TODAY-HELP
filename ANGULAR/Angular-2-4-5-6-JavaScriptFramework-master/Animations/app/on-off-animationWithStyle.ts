import { trigger, state, animate, transition, style } from '@angular/animations';

export const ON_OF_ANIMATION2 = trigger('onOffBookTrigger', [
  state('reject', style({
    backgroundColor: '#E5E7E9',
    color: '#1C2833',
    fontSize: '1em',
    fontFamily: 'verdana',
    transform: 'scale(2)'
  })),
  state('resolve', style({
    backgroundColor: '#17202A',
    color: '#F0F3F4',
    fontSize: '1.5em',
    fontFamily: 'cursive',
    transform: 'scale(2.5)'
  })),
  transition('reject => resolve', animate('1.1s 100ms ease-in', style({
    backgroundColor: 'blue',
    fontSize: '1.1em',
    fontFamily: 'arial'
  }))),
  transition('resolve => reject', animate('1.1s 100ms ease-out', style({
    backgroundColor: 'red',
    fontSize: '1.1em',
    fontFamily: 'serif',
  })))
]);
