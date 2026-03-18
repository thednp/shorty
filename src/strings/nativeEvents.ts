import abort from "./abortEvent.ts";
import beforeunload from "./beforeunloadEvent.ts";
import blur from "./blurEvent.ts";
import change from "./changeEvent.ts";
import contextmenu from "./contextmenuEvent.ts";
import DOMContentLoaded from "./DOMContentLoadedEvent.ts";
import DOMMouseScroll from "./DOMMouseScrollEvent.ts";
import error from "./errorEvent.ts";
import focus from "./focusEvent.ts";
import focusin from "./focusinEvent.ts";
import focusout from "./focusoutEvent.ts";
import gesturechange from "./gesturechangeEvent.ts";
import gestureend from "./gestureendEvent.ts";
import gesturestart from "./gesturestartEvent.ts";
import keydown from "./keydownEvent.ts";
import keypress from "./keypressEvent.ts";
import keyup from "./keyupEvent.ts";
import load from "./loadEvent.ts";
import click from "./mouseclickEvent.ts";
import dblclick from "./mousedblclickEvent.ts";
import mousedown from "./mousedownEvent.ts";
import mouseup from "./mouseupEvent.ts";
import hover from "./mousehoverEvent.ts";
import mouseenter from "./mouseenterEvent.ts";
import mouseleave from "./mouseleaveEvent.ts";
import mousein from "./mouseinEvent.ts";
import mouseout from "./mouseoutEvent.ts";
import mouseover from "./mouseoverEvent.ts";
import mousemove from "./mousemoveEvent.ts";
import mousewheel from "./mousewheelEvent.ts";
import move from "./moveEvent.ts";
import orientationchange from "./orientationchangeEvent.ts";
import pointercancel from "./pointercancelEvent.ts";
import pointerdown from "./pointerdownEvent.ts";
import pointerleave from "./pointerleaveEvent.ts";
import pointermove from "./pointermoveEvent.ts";
import pointerup from "./pointerupEvent.ts";
import readystatechange from "./readystatechangeEvent.ts";
import reset from "./resetEvent.ts";
import resize from "./resizeEvent.ts";
import select from "./selectEvent.ts";
import selectend from "./selectendEvent.ts";
import selectstart from "./selectstartEvent.ts";
import scroll from "./scrollEvent.ts";
import submit from "./submitEvent.ts";
import touchstart from "./touchstartEvent.ts";
import touchmove from "./touchmoveEvent.ts";
import touchcancel from "./touchcancelEvent.ts";
import touchend from "./touchendEvent.ts";
import unload from "./unloadEvent.ts";

/**
 * A global namespace for all browser native events.
 */
const nativeEvents = {
  DOMContentLoaded,
  DOMMouseScroll,
  abort,
  beforeunload,
  blur,
  change,
  click,
  contextmenu,
  dblclick,
  error,
  focus,
  focusin,
  focusout,
  gesturechange,
  gestureend,
  gesturestart,
  hover,
  keydown,
  keypress,
  keyup,
  load,
  mousedown,
  mousemove,
  mousein,
  mouseout,
  mouseenter,
  mouseleave,
  mouseover,
  mouseup,
  mousewheel,
  move,
  orientationchange,
  pointercancel,
  pointerdown,
  pointerleave,
  pointermove,
  pointerup,
  readystatechange,
  reset,
  resize,
  scroll,
  select,
  selectend,
  selectstart,
  submit,
  touchcancel,
  touchend,
  touchmove,
  touchstart,
  unload,
};

export default nativeEvents;
