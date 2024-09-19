import type { OriginalEvent } from '../interface/originalEvent';
import isObject from '../is/isObject';
import ObjectAssign from './ObjectAssign';

/**
 * Returns a namespaced `CustomEvent` specific to each component.
 *
 * @param eventType Event.type
 * @param config Event.options | Event.properties
 * @returns a new namespaced event
 */
const createCustomEvent = <O extends Record<string, unknown>, T extends OriginalEvent>(
  eventType: string,
  config?: O,
): T => {
  const OriginalCustomEvent = new CustomEvent<O>(eventType, {
    cancelable: true,
    bubbles: true,
  }) as T;

  /* istanbul ignore else @preserve */
  if (isObject(config)) {
    ObjectAssign(OriginalCustomEvent, config);
  }
  return OriginalCustomEvent;
};

export default createCustomEvent;
