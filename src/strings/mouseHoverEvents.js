/**
 * A global namespace for mouse hover events.
 * @type {[string, string]}
 */
const mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave']
  : /* istanbul ignore next */['mouseover', 'mouseout'];
export default mouseHoverEvents;
