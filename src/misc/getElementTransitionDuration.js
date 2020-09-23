import supportTransition from '../boolean/supportTransition.js';
import transitionDuration from '../strings/transitionDuration.js';
import transitionProperty from '../strings/transitionProperty.js';

export default function(element) {
  let computedStyle = getComputedStyle(element),
      property = computedStyle[transitionProperty],
      duration = supportTransition && property && property !== 'none' 
               ? parseFloat(computedStyle[transitionDuration]) : 0;

  return !isNaN(duration) ? duration * 1000 : 0;
}