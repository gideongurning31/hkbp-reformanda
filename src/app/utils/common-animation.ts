import { trigger, state, style, transition, animate } from '@angular/animations';

export const animateFadeIn = trigger('fading', [
  state('void', style({ opacity: 0 })),
  transition('void <=> *', [animate(1500)]),
]);

export const animateFadeUp = trigger('fadeUp', animateFade('Y', 100));
export const animateFadeLeft = trigger('fadeLeft', animateFade('X', 100));
export const animateFadeDown = trigger('fadeDown', animateFade('Y', -100));
export const animateFadeRight = trigger('fadeRight', animateFade('X', -100));

function animateFade(axis: string, direction: number) {
  return [
    state('void', style({ opacity: 0, transform: `translate${axis}(${direction}px)` })),
    transition('void <=> *', [animate(1500)]),
  ];
}
