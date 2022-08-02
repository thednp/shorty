import animationEndEvent from "../strings/animationEndEvent";
import getElementAnimationDelay from "../get/getElementAnimationDelay";
import getElementAnimationDuration from "../get/getElementAnimationDuration";
import dispatchEvent from "./dispatchEvent";
const emulateAnimationEnd = (element, handler) => {
    let called = 0;
    const endEvent = new Event(animationEndEvent);
    const duration = getElementAnimationDuration(element);
    const delay = getElementAnimationDelay(element);
    if (duration) {
        const animationEndWrapper = (e) => {
            if (e.target === element) {
                handler.apply(element, [e]);
                element.removeEventListener(animationEndEvent, animationEndWrapper);
                called = 1;
            }
        };
        element.addEventListener(animationEndEvent, animationEndWrapper);
        setTimeout(() => {
            if (!called)
                dispatchEvent(element, endEvent);
        }, duration + delay + 17);
    }
    else {
        handler.apply(element, [endEvent]);
    }
};
export default emulateAnimationEnd;
//# sourceMappingURL=emulateAnimationEnd.js.map