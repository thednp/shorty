import supportAnimation from '../boolean/supportAnimation.js';
import animationDuration from '../strings/animationDuration.js';
import animationName from '../strings/animationName.js';

/**
 * Utility to get the computed animationDuration
 * from Element in miliseconds.
 *
 * @param {Element} element target
 * @return {Number} the value in miliseconds
 */
export default function getElementAnimationDuration(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[animationName];
  const durationValue = computedStyle[animationDuration];
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
