import supportTransition from '../boolean/supportTransition.js'
import transitionDuration from '../strings/transitionDuration.js'
import transitionProperty from '../strings/transitionProperty.js'

export default function(element) {
  let computedStyle = getComputedStyle(element),
      propertyValue = computedStyle[transitionProperty],
      durationValue = computedStyle[transitionDuration],
      durationScale = durationValue.indexOf('ms') > -1 ? 1 : 1000,
      duration = supportTransition && propertyValue && propertyValue !== 'none' 
               ? parseFloat( durationValue ) * durationScale : 0

  return !isNaN(duration) ? duration : 0
}