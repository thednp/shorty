import { NativeEventTypes, PossibleEventTarget, SupportedEventHandler } from '../interface/event';

/**
 * Remove eventListener from an `EventTarget` object.
 */
const off = <T extends PossibleEventTarget>(
  element: T,
  eventName: NativeEventTypes,
  listener: EventListenerObject & SupportedEventHandler<T>,
  options?: AddEventListenerOptions,
) => {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
};

export default off;
