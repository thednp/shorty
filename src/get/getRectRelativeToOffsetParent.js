import isScaledElement from '../is/isScaledElement';
import isHTMLElement from '../is/isHTMLElement';
import getBoundingClientRect from './getBoundingClientRect';
const getRectRelativeToOffsetParent = (element, offsetParent, scroll) => {
    const isParentAnElement = isHTMLElement(offsetParent);
    const rect = getBoundingClientRect(element, isParentAnElement && isScaledElement(offsetParent));
    const offsets = { x: 0, y: 0 };
    if (isParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
    }
    return {
        x: rect.left + scroll.x - offsets.x,
        y: rect.top + scroll.y - offsets.y,
        width: rect.width,
        height: rect.height,
    };
};
export default getRectRelativeToOffsetParent;
//# sourceMappingURL=getRectRelativeToOffsetParent.js.map