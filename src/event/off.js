/**
 * Remove eventListener from an `Element` | `HTMLElement` | `Document` | `Window` target.
 *
 * @param {HTMLElement | Element | Document | Window} element event.target
 * @param {string} eventName event.type
 * @param {EventListenerObject['handleEvent']} handler callback
 * @param {(EventListenerOptions | boolean)=} options other event options
 */
export default function off(element, eventName, handler, options) {
  const ops = options || false;
  element.removeEventListener(eventName, handler, ops);
}
