import animationDuration from '../strings/animationDuration';
import animationName from '../strings/animationName';
import getElementStyle from './getElementStyle';

/**
 * Utility to get the computed `animationDuration`
 * from `HTMLElement` in miliseconds.
 *
 * @param {HTMLElement | Element} element target
 * @return {number} the value in miliseconds
 */
export default function getElementAnimationDuration(element) {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDuration);
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
