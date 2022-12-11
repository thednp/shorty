import { a as animationName } from './animationName-db8d0d3d.js';
import getElementStyle from './getElementStyle.mjs';

const animationDelay = "animationDelay";

const getElementAnimationDelay = (element) => {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDelay);
  const durationScale = durationValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

export { getElementAnimationDelay as default };
//# sourceMappingURL=getElementAnimationDelay.mjs.map
