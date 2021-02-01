import supportAnimation from '../boolean/supportAnimation.js';
import animationDelay from '../strings/animationDelay.js';
import animationName from '../strings/animationName.js';

export default function(element) {
  let computedStyle = getComputedStyle(element),
      propertyValue = computedStyle[animationName],
      durationValue = computedStyle[animationDelay],
      durationScale = durationValue.indexOf('ms') > -1 ? 1 : 1000,
      duration = supportAnimation && propertyValue && propertyValue !== 'none'
               ? parseFloat( durationValue ) * durationScale : 0  

  return !isNaN(duration) ? duration : 0
}