import { trigger, state, transition, animate, style } from '@angular/animations';


export const ON_OF_ANIMATION1 = trigger('onOffBook', [
  state('inactive', style({
    backgroundColor: '#E5E7E9',
    color: '#1C2833',
    fontSize: '1em',
    fontFamily: 'verdana',
    transform: 'scale(2)'
  })),
  state('active', style({
    backgroundColor: '#17202A',
    color: '#F0F3F4',
    fontSize: '1.5em',
    fontFamily: 'cursive',
    transform: 'scale(2.5)'
  })),
  transition('inactive => active', animate('.1s 100ms ease-in')),
  transition('active => inactive', animate('.1s 100ms ease-out'))
]);


