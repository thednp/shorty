import supportAnimation from '../boolean/supportAnimation.js';
import animationDuration from '../strings/animationDuration.js';
import animationName from '../strings/animationName.js';

export default function getElementAnimationDuration(element) {
  const computedStyle = getComputedStyle(element);
  const propertyValue = computedStyle[animationName];
  const durationValue = computedStyle[animationDuration];
  const durationScale = durationValue.includes('ms') ? 1 : 1000;
  const duration = supportAnimation && propertyValue && propertyValue !== 'none'
    ? parseFloat(durationValue) * durationScale : 0;

  return !Number.isNaN(duration) ? duration : 0;
}
