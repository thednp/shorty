/**
 * Remove eventListener from an `EventTarget` object.
 */
export default function off(
  element: EventTarget,
  eventName: string,
  listener: EventListener,
  options?: AddEventListenerOptions,
) {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
}
