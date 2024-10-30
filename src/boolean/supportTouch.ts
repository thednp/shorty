/**
 * An accessor that checks for touch events support.
 */
const supportTouch = () =>
  "ontouchstart" in window ||
  /* istanbul ignore next @preserve */
  "msMaxTouchPoints" in navigator;

export default supportTouch;
