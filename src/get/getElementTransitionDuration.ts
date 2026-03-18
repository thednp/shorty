import transitionDuration from "../strings/transitionDuration.ts";
import transitionProperty from "../strings/transitionProperty.ts";
import getElementStyle from "./getElementStyle.ts";

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
  /* istanbul ignore next @preserve */
  const durationScale = durationValue.includes("ms") ? 1 : 1000;
  /* istanbul ignore next @preserve */
  const duration = propertyValue && propertyValue !== "none"
    ? parseFloat(durationValue) * durationScale
    : 0;

  /* istanbul ignore next @preserve */
  return !Number.isNaN(duration) ? duration : 0;
};

export default getElementTransitionDuration;
