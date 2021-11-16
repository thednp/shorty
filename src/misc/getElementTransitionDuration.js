import supportTransition from '../boolean/supportTransition.js';
import transitionDuration from '../strings/transitionDuration.js';
import transitionProperty from '../strings/transitionProperty.js';

/**
 * Utility to get the computed transitionDuration
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
export default function getElementTransitionDuration(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[transitionProperty];
  const durationValue = computedStyle[transitionDuration];
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
