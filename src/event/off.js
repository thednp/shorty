/**
 * Remove eventListener from an `HTMLElement` | `Document` | `Window` target.
 *
 * @type {SHORTY.OnOff<EventTarget>}
 */
export default function off(element, eventName, listener, options) {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
}
