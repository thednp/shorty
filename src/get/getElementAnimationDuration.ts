import animationDuration from "../strings/animationDuration";
import animationName from "../strings/animationName";
import getElementStyle from "./getElementStyle";

/**
 * Utility to get the computed `animationDuration`
 * from `Element` in miliseconds.
 *
 * @param element target
 * @return the `animationDuration` value in miliseconds
 */
const getElementAnimationDuration = (
  element: Element,
): number => {
  const propertyValue = getElementStyle(element, animationName);
  const durationValue = getElementStyle(element, animationDuration);
  const durationScale = durationValue.includes("ms")
    ? /* istanbul ignore next @preserve */ 1
    : 1000;
  const duration = propertyValue && propertyValue !== "none"
    ? parseFloat(durationValue) * durationScale
    : 0;

  return !Number.isNaN(duration)
    ? duration
    : /* istanbul ignore next @preserve */ 0;
};

export default getElementAnimationDuration;
