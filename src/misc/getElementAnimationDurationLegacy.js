import supportAnimation from '../boolean/supportAnimation';
import animationDuration from '../strings/animationDurationLegacy';
import animationName from '../strings/animationNameLegacy';
import getElementStyle from './getElementStyle';

/**
 * Utility to get the computed `animationDuration`
 * from `HTMLElement` in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
export default function getElementAnimationDuration(element) {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDuration);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
