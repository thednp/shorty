import isObject from "../is/isObject";
import ObjectAssign from "./ObjectAssign";
const OriginalEvent = (EventType, config) => {
    const OriginalCustomEvent = new CustomEvent(EventType, {
        cancelable: true,
        bubbles: true,
    });
    if (isObject(config)) {
        ObjectAssign(OriginalCustomEvent, config);
    }
    return OriginalCustomEvent;
};
export default OriginalEvent;
//# sourceMappingURL=OriginalEvent.js.map