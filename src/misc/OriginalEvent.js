import isObject from '../is/isObject';
import ObjectAssign from './ObjectAssign';

/**
 * Returns a namespaced `CustomEvent` specific to each component.
 * @param {string} EventType Event.type
 * @param {Record<string, any>=} config Event.options | Event.properties
 * @returns {SHORTY.OriginalEvent} a new namespaced event
 */
export default function OriginalEvent(EventType, config) {
  const OriginalCustomEvent = new CustomEvent(EventType, {
    cancelable: true, bubbles: true,
  });

  /* istanbul ignore else */
  if (isObject(config)) {
    ObjectAssign(OriginalCustomEvent, config);
  }
  return OriginalCustomEvent;
}
