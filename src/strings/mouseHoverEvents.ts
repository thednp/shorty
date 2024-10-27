/**
 * A global namespace for mouse hover events.
 */
const mouseHoverEvents = "onmouseleave" in document
  ? ["mouseenter", "mouseleave"]
  : /* istanbul ignore next @preserve */ ["mouseover", "mouseout"];
export default mouseHoverEvents;
