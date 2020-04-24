import { supportTransition } from '../boolean/supportTransition.js';
import { transitionDuration } from '../strings/transitionDuration.js';

export function getElementTransitionDuration (element) {
  let duration = supportTransition ? window.getComputedStyle(element)[transitionDuration] : 0;
  duration = parseFloat(duration);
  duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
  return duration;
}