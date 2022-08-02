import animationDelay from "../strings/animationDelay";
import animationName from "../strings/animationName";
import getElementStyle from "./getElementStyle";
const getElementAnimationDelay = (element) => {
    const propertyValue = getElementStyle(element, animationName);
    const durationValue = getElementStyle(element, animationDelay);
    const durationScale = durationValue.includes("ms") ? 1 : 1000;
    const duration = propertyValue && propertyValue !== "none" ? parseFloat(durationValue) * durationScale : 0;
    return !Number.isNaN(duration) ? duration : 0;
};
export default getElementAnimationDelay;
