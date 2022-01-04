/**
 * A global `boolean` for touch events support.
 * @type {boolean}
 */
const supportTouch = 'ontouchstart' in window || 'msMaxTouchPoints' in navigator;
export default supportTouch;
