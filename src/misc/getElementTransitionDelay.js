import supportTransition from '../boolean/supportTransition.js';
import transitionDelay from '../strings/transitionDelay.js';
import transitionProperty from '../strings/transitionProperty.js';

/**
 * Utility to get the computed transitionDelay
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
export default function getElementTransitionDelay(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[transitionProperty];
  const delayValue = computedStyle[transitionDelay];
  const delayScale = delayValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(delayValue) * delayScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
