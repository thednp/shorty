import { t as transitionProperty } from './transitionProperty.1c387f74.js';
import getElementStyle from './getElementStyle.mjs';

const transitionDuration = "transitionDuration";

const getElementTransitionDuration = (element) => {
  const propertyValue = getElementStyle(element, transitionProperty);
  const durationValue = getElementStyle(element, transitionDuration);
  const durationScale = durationValue.includes("ms") ? 1 : 1e3;
  const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
  return !Number.isNaN(duration) ? duration : 0;
};

export { getElementTransitionDuration as default };
//# sourceMappingURL=getElementTransitionDuration.mjs.map
