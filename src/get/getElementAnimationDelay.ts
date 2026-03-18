import animationDelay from "../strings/animationDelay.ts";
import animationName from "../strings/animationName.ts";
import getElementStyle from "./getElementStyle.ts";

/**
 * Utility to get the computed `animationDelay`
 * from Element in miliseconds.
 *
 * @param element target
 * @return the `animationDelay` value in miliseconds
 */
const getElementAnimationDelay = (
  element: Element,
): number => {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDelay);
  /* istanbul ignore next @preserve */
  const durationScale = durationValue.includes("ms") ? 1 : 1000;
  const duration = propertyValue && propertyValue !== "none"
    ? parseFloat(durationValue) * durationScale
    : 0;
  /* istanbul ignore next @preserve */
  return !Number.isNaN(duration) ? duration : 0;
};

export default getElementAnimationDelay;
