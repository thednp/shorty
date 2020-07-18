import supportTransition from '../boolean/supportTransition.js';
import transitionDelay from '../strings/transitionDelay.js';

export default function(element) {
  let duration = supportTransition ? parseFloat(getComputedStyle(element)[transitionDuration]) : 0;
  duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
  return duration;
}