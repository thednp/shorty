/**
 * Remove eventListener from an `Element` | `HTMLElement` | `Document` target.
 *
 * @param {HTMLElement | Element | Document} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | undefined} options other event options
 */
export default function off(element, eventName, handler, options) {
  const ops = options || false;
  element.removeEventListener(eventName, handler, ops);
}
