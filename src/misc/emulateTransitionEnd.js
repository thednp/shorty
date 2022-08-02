import transitionEndEvent from "../strings/transitionEndEvent";
import getElementTransitionDelay from "../get/getElementTransitionDelay";
import getElementTransitionDuration from "../get/getElementTransitionDuration";
import dispatchEvent from "./dispatchEvent";
const emulateTransitionEnd = (element, handler) => {
    let called = 0;
    const endEvent = new Event(transitionEndEvent);
    const duration = getElementTransitionDuration(element);
    const delay = getElementTransitionDelay(element);
    if (duration) {
        const transitionEndWrapper = (e) => {
            if (e.target === element) {
                handler.apply(element, [e]);
                element.removeEventListener(transitionEndEvent, transitionEndWrapper);
                called = 1;
            }
        };
        element.addEventListener(transitionEndEvent, transitionEndWrapper);
        setTimeout(() => {
            if (!called)
                dispatchEvent(element, endEvent);
        }, duration + delay + 17);
    }
    else {
        handler.apply(element, [endEvent]);
    }
};
export default emulateTransitionEnd;
