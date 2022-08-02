import transitionDelay from "../strings/transitionDelay";
import transitionProperty from "../strings/transitionProperty";
import getElementStyle from "./getElementStyle";
const getElementTransitionDelay = (element) => {
    const propertyValue = getElementStyle(element, transitionProperty);
    const delayValue = getElementStyle(element, transitionDelay);
    const delayScale = delayValue.includes("ms") ? 1 : 1000;
    const duration = propertyValue && propertyValue !== "none" ? parseFloat(delayValue) * delayScale : 0;
    return !Number.isNaN(duration) ? duration : 0;
};
export default getElementTransitionDelay;
//# sourceMappingURL=getElementTransitionDelay.js.map