import supportAnimation from '../boolean/supportAnimation.js';
import animationDuration from '../strings/animationDuration.js';
import animationName from '../strings/animationName.js';

export default function(element) {
  let computedStyle = getComputedStyle(element),
      name = computedStyle[animationName],
      duration = supportAnimation && name && name !== 'none' 
               ? parseFloat(computedStyle[animationDuration]) : 0;

  return !isNaN(duration) ? duration * 1000 : 0
}