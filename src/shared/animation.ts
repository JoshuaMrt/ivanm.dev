// animations.ts

import { trigger, transition, style, animate } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('0.4s ease-in-out', style({ opacity: 1 })),
  ]),
]);
