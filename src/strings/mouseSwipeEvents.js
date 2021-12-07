/**
 * A global namespace for mouse events equivalent with touch events.
 * @type {{start: string, end: string, move: string, cancel: string}}
 */
const mouseSwipeEvents = {
  start: 'mousedown', end: 'mouseup', move: 'mousemove', cancel: 'mouseout',
};
export default mouseSwipeEvents;
