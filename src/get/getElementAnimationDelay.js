import animationDelay from '../strings/animationDelay';
import animationName from '../strings/animationName';
import getElementStyle from './getElementStyle';

/**
 * Utility to get the computed `animationDelay`
 * from Element in miliseconds.
 *
 * @param {HTMLElement} element target
 * @return {number} the value in miliseconds
 */
export default function getElementAnimationDelay(element) {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDelay);
  const durationScale = durationValue.includes('ms') ? /* istanbul ignore next */1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  /* istanbul ignore next */
  return !Number.isNaN(duration) ? duration : 0;
}
