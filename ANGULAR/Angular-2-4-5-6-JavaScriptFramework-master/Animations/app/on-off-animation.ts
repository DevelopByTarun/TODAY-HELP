import { trigger, state, transition, animate, style } from '@angular/animations';


export const ON_OF_ANIMATION = trigger('onOffButton', [
  state('off', style({
    backgroundColor: '#eee',
    transform: 'scale(2,2) rotate(0deg)'
  })),
  state('on', style({
    backgroundColor: '#cfd8dc',
    transform: 'scale(3, 5) rotate(180deg)'
  })),
  transition('off => on', animate('2s 100ms ease-in')),
  transition('on => off', animate('2s 100ms ease-out'))
]);
