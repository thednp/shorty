import { OriginalEvent } from '../interface/originalEvent';
import isObject from '../is/isObject';
import ObjectAssign from './ObjectAssign';

/**
 * Returns a namespaced `CustomEvent` specific to each component.
 * @param EventType Event.type
 * @param config Event.options | Event.properties
 * @returns a new namespaced event
 */
const OriginalEvent = <T>(EventType: string, config?: CustomEventInit<T>): OriginalEvent<T> => {
  const OriginalCustomEvent = new CustomEvent<T>(EventType, {
    cancelable: true,
    bubbles: true,
  } as CustomEventInit<T>);

  /* istanbul ignore else */
  if (isObject(config)) {
    ObjectAssign(OriginalCustomEvent, config);
  }
  return OriginalCustomEvent;
};

export default OriginalEvent;
