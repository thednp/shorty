import transitionDelay from '../strings/transitionDelay';
import transitionProperty from '../strings/transitionProperty';
import getElementStyle from './getElementStyle';

/**
 * Utility to get the computed `transitionDelay`
 * from Element in miliseconds.
 *
 * @param {SHORTER.ElementNodes} element target
 * @return {number} the value in miliseconds
 */
export default function getElementTransitionDelay(element) {
  const propertyValue = getElementStyle(element, transitionProperty);
  const delayValue = getElementStyle(element, transitionDelay);

  const delayScale = delayValue.includes('ms') ? 1 : 1000;
  const duration = propertyValue && propertyValue !== 'none'
    ? parseFloat(delayValue) * delayScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
