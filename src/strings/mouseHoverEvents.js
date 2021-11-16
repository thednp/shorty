/**
 * A global namespace for mouse hover events.
 * @type {string[]}
 */
const mouseHoverEvents = ('onmouseleave' in document) ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'];
export default mouseHoverEvents;
