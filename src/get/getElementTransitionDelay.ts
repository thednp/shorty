import transitionDelay from "../strings/transitionDelay.ts";
import transitionProperty from "../strings/transitionProperty.ts";
import getElementStyle from "./getElementStyle.ts";

/**
 * Utility to get the computed `transitionDelay`
 * from Element in miliseconds.
 *
 * @param element target
 * @return the `transitionDelay` value in miliseconds
 */
const getElementTransitionDelay = (element: Element) => {
  const propertyValue = getElementStyle(element, transitionProperty);
  const delayValue = getElementStyle(element, transitionDelay);
  /* istanbul ignore next @preserve */
  const delayScale = delayValue.includes("ms") ? 1 : 1000;
  /* istanbul ignore next @preserve */
  const duration = propertyValue && propertyValue !== "none"
    ? parseFloat(delayValue) * delayScale
    : 0;

  /* istanbul ignore next @preserve */
  return !Number.isNaN(duration) ? duration : 0;
};

export default getElementTransitionDelay;
