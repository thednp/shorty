import supportTransition from '../boolean/supportTransition';
import transitionDuration from '../strings/transitionDurationLegacy';
import transitionProperty from '../strings/transitionPropertyLegacy';
import getElementStyle from './getElementStyle';

/**
 * Utility to get the computed `transitionDuration`
 * from Element in miliseconds.
 *
 * @param {HTMLElement | Element} element target
 * @return {number} the value in miliseconds
 */
export default function getElementTransitionDuration(element) {
  const propertyValue = getElementStyle(element, transitionProperty);
  const durationValue = getElementStyle(element, transitionDuration);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportTransition && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
