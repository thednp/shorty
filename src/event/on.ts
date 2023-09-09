/**
 * Add eventListener to an `EventTarget` object.
 */
const on = <T extends EventTarget, L = EventListener>(
  element: T,
  eventName: string,
  listener: L,
  options?: AddEventListenerOptions,
) => {
  const ops = options || false;
  element.addEventListener(eventName, listener as EventListenerOrEventListenerObject, ops);
};

export default on;
