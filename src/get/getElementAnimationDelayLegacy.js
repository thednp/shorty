import supportAnimation from '../boolean/supportAnimation';
import animationDelay from '../strings/animationDelayLegacy';
import animationName from '../strings/animationNameLegacy';
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
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : /* istanbul ignore next */0;
}
