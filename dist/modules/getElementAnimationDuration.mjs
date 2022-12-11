import { a as animationName } from './animationName-db8d0d3d.js';
import getElementStyle from './getElementStyle.mjs';

const animationDuration = "animationDuration";

const getElementAnimationDuration = (element) => {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDuration);
  const durationScale = durationValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

export { getElementAnimationDuration as default };
//# sourceMappingURL=getElementAnimationDuration.mjs.map
