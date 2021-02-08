import supportTransition from '../boolean/supportTransition.js'
import transitionDelay from '../strings/transitionDelay.js'
import transitionProperty from '../strings/transitionProperty.js'

export default function(element) {
  let computedStyle = getComputedStyle(element),
      propertyValue = computedStyle[transitionProperty],
      delayValue = computedStyle[transitionDelay],
      delayScale = delayValue.includes('ms') ? 1 : 1000,
      duration = supportTransition && propertyValue && propertyValue !== 'none' 
               ? parseFloat( delayValue ) * delayScale : 0
  
  return !isNaN(duration) ? duration : 0
}