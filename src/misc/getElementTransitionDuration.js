import supportTransition from '../boolean/supportTransition.js';
import transitionDuration from '../strings/transitionDuration.js';

export default function(element) {
  let duration = supportTransition ? parseFloat(getComputedStyle(element)[transitionDuration]) : 0;
  duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
  return duration;
}