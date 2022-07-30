import isHTMLElement from "../is/isHTMLElement";
const TimeCache = new Map();
const Timer = {
    set: (element, callback, delay, key) => {
        if (!isHTMLElement(element))
            return;
        if (key && key.length) {
            if (!TimeCache.has(element)) {
                TimeCache.set(element, new Map());
            }
            const keyTimers = TimeCache.get(element);
            keyTimers.set(key, setTimeout(callback, delay));
        }
        else {
            TimeCache.set(element, setTimeout(callback, delay));
        }
    },
    get: (element, key) => {
        if (!isHTMLElement(element))
            return null;
        const keyTimers = TimeCache.get(element);
        if (key && key.length && keyTimers && keyTimers.get) {
            return keyTimers.get(key) || null;
        }
        return keyTimers || null;
    },
    clear: (element, key) => {
        if (!isHTMLElement(element))
            return;
        if (key && key.length) {
            const keyTimers = TimeCache.get(element);
            if (keyTimers && keyTimers.get) {
                clearTimeout(keyTimers.get(key));
                keyTimers.delete(key);
                if (keyTimers.size === 0) {
                    TimeCache.delete(element);
                }
            }
        }
        else {
            clearTimeout(TimeCache.get(element));
            TimeCache.delete(element);
        }
    },
};
export default Timer;
//# sourceMappingURL=timer.js.map