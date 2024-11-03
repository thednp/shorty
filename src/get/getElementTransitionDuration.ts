import transitionDuration from "../strings/transitionDuration";
import transitionProperty from "../strings/transitionProperty";
import getElementStyle from "./getElementStyle";

/**
 * Utility to get the computed `transitionDuration`
 * from Element in miliseconds.
 *
 * @param element target
 * @return the `transitionDuration` value in miliseconds
 */
const getElementTransitionDuration = (element: Element) => {
  const propertyValue = getElementStyle(element, transitionProperty);
  const durationValue = getElementStyle(element, transitionDuration);
  const durationScale = durationValue.includes("ms")
    ? /* istanbul ignore next @preserve */ 1
    : 1000;
  const duration = propertyValue && propertyValue !== "none"
    ? parseFloat(durationValue) * durationScale
    : /* istanbul ignore next @preserve */ 0;

  return !Number.isNaN(duration)
    ? duration
    : /* istanbul ignore next @preserve */ 0;
};

export default getElementTransitionDuration;
