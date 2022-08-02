import isHTMLElement from "./isHTMLElement";
import getBoundingClientRect from "../get/getBoundingClientRect";
export default function isScaledElement(element) {
    if (!isHTMLElement(element))
        return false;
    const { width, height } = getBoundingClientRect(element);
    const { offsetWidth, offsetHeight } = element;
    return Math.round(width) !== offsetWidth || Math.round(height) !== offsetHeight;
}
