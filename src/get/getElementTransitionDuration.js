import transitionDuration from "../strings/transitionDuration";
import transitionProperty from "../strings/transitionProperty";
import getElementStyle from "./getElementStyle";
const getElementTransitionDuration = (element) => {
    const propertyValue = getElementStyle(element, transitionProperty);
    const durationValue = getElementStyle(element, transitionDuration);
    const durationScale = durationValue.includes("ms") ? 1 : 1000;
    const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
    return !Number.isNaN(duration) ? duration : 0;
};
export default getElementTransitionDuration;
//# sourceMappingURL=getElementTransitionDuration.js.map