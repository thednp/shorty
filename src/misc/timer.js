import isMap from '../is/isMap';
import isHTMLElement from '../is/isHTMLElement';
import isNumber from '../is/isNumber';
const TimeCache = new Map();
const Timer = {
    set: (element, callback, delay, key) => {
        if (!isHTMLElement(element))
            return;
        if (key && key.length) {
            if (!TimeCache.has(element)) {
                TimeCache.set(element, new Map());
            }
            TimeCache.get(element).set(key, setTimeout(callback, delay));
        }
        else {
            TimeCache.set(element, setTimeout(callback, delay));
        }
    },
    get: (element, key) => {
        if (!isHTMLElement(element))
            return null;
        const keyTimers = TimeCache.get(element);
        if (isMap(keyTimers)) {
            return keyTimers.get(key) || null;
        }
        else if (isNumber(keyTimers)) {
            return keyTimers;
        }
        return null;
    },
    clear: (element, key) => {
        if (!isHTMLElement(element))
            return;
        const keyTimers = TimeCache.get(element);
        if (key && key.length && isMap(keyTimers)) {
            if (isMap(keyTimers)) {
                clearTimeout(keyTimers.get(key));
                keyTimers.delete(key);
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
