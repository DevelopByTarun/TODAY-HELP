import {trigger, animate, state, style, transition, keyframes} from '@angular/animations';

export const SHOW_HIDE_ANIMATION = trigger('myShowHide', [
  state('show', style({
    opacity: '1'
  })),
  state('hide', style({
    opacity: '0'
  })),
  transition('show => hide', animate('4s 100ms ease-in')),
  transition('hide => show', animate('4s 100ms ease-out'))
]);
