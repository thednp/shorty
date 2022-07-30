/**
 * Remove eventListener from an `HTMLElement` | `Document` | `Window` target.
 */
export default function off(
  element: EventTarget,
  eventName: string,
  listener: EventListenerObject["handleEvent"],
  options?: AddEventListenerOptions
) {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
}
