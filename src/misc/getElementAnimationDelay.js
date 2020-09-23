import supportAnimation from '../boolean/supportAnimation.js';
import animationDelay from '../strings/animationDelay.js';
import animationName from '../strings/animationName.js';

export default function(element) {
  let computedStyle = getComputedStyle(element),
      name = computedStyle[animationName],
      delay = supportAnimation && name && name !== 'none'
            ? parseFloat(computedStyle[animationDelay]) : 0;

  return !isNaN(delay) ? delay * 1000 : 0;
}