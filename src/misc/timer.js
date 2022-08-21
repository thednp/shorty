import isMap from '../is/isMap';
import isHTMLElement from '../is/isHTMLElement';
import isNumber from '../is/isNumber';
const TimeCache = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar/
 */
const Timer = {
    /**
     * Sets a new timeout timer for an element, or element -> key association.
     * @param element target element
     * @param callback the callback
     * @param delay the execution delay
     * @param key a unique key
     */
    set: (element, callback, delay, key) => {
        if (!isHTMLElement(element))
            return;
        /* istanbul ignore else */
        if (key && key.length) {
            /* istanbul ignore else */
            if (!TimeCache.has(element)) {
                TimeCache.set(element, new Map());
            }
            TimeCache.get(element).set(key, setTimeout(callback, delay));
        }
        else {
            TimeCache.set(element, setTimeout(callback, delay));
        }
    },
    /**
     * Returns the timer associated with the target.
     * @param element target element
     * @param key a unique
     * @returns the timer
     */
    get: (element, key) => {
        if (!isHTMLElement(element))
            return null;
        const keyTimers = TimeCache.get(element);
        if (key && isMap(keyTimers)) {
            return keyTimers.get(key) || /* istanbul ignore next */ null;
        }
        else if (isNumber(keyTimers)) {
            return keyTimers;
        }
        return null;
    },
    /**
     * Clears the element's timer.
     * @param element target element
     * @param key a unique key
     */
    clear: (element, key) => {
        if (!isHTMLElement(element))
            return;
        const keyTimers = TimeCache.get(element);
        if (key && key.length && isMap(keyTimers)) {
            /* istanbul ignore else */
            if (isMap(keyTimers)) {
                clearTimeout(keyTimers.get(key));
                keyTimers.delete(key);
                /* istanbul ignore else */
                if (keyTimers.size === 0) {
                    TimeCache.delete(element);
                }
            }
        }
        else {
            clearTimeout(keyTimers);
            TimeCache.delete(element);
        }
    },
};
export default Timer;
//# sourceMappingURL=timer.js.map