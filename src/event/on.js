/**
 * Add eventListener to an `Element` | `HTMLElement` | `Document` target.
 *
 * @param {SHORTER.ElementNodes | Document} element event.target
 * @param {string} eventName event.type
 * @param {EventListener} handler callback
 * @param {EventListenerOptions | boolean | undefined} options other event options
 */
export default function on(element, eventName, handler, options) {
  const ops = options || false;
  element.addEventListener(eventName, handler, ops);
}
