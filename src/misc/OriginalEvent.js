import isObject from '../is/isObject';
import ObjectAssign from './ObjectAssign';
/**
 * Returns a namespaced `CustomEvent` specific to each component.
 * @param EventType Event.type
 * @param config Event.options | Event.properties
 * @returns a new namespaced event
 */
const OriginalEvent = (EventType, config) => {
    const OriginalCustomEvent = new CustomEvent(EventType, {
        cancelable: true,
        bubbles: true,
    });
    /* istanbul ignore else */
    if (isObject(config)) {
        ObjectAssign(OriginalCustomEvent, config);
    }
    return OriginalCustomEvent;
};
export default OriginalEvent;
//# sourceMappingURL=OriginalEvent.js.map