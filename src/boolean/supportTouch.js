/**
 * A global `boolean` for touch events support.
 * @type {boolean}
 */
const supportTouch = 'ontouchstart' in window
  || /* istanbul ignore next */'msMaxTouchPoints' in navigator;
export default supportTouch;
