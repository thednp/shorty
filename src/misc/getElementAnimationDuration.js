import supportAnimation from '../boolean/supportAnimation.js';
import animationDuration from '../strings/animationDuration.js';

export default function(element) {
  let duration = supportAnimation ? parseFloat(getComputedStyle(element)[animationDuration]) : 0;
  duration = typeof duration === 'number' && !isNaN(duration) ? duration * 1000 : 0;
  return duration;
}