/**
 * A global namespace for mouse hover events.
 */
// istanbul ignore next @preserve
const mouseHoverEvents = "onmouseleave" in document
  ? ["mouseenter", "mouseleave"]
  : ["mouseover", "mouseout"];
export default mouseHoverEvents;
