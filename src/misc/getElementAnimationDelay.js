import supportAnimation from '../boolean/supportAnimation.js';
import animationDelay from '../strings/animationDelay.js';

export default function(element) {
  let delay = supportAnimation ? parseFloat(getComputedStyle(element)[animationDelay]) : 0;
  delay = typeof delay === 'number' && !isNaN(delay) ? delay * 1000 : 0;
  return delay;
}