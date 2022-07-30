import isHTMLElement from "../is/isHTMLElement";
const getBoundingClientRect = (element, includeScale) => {
    const { width, height, top, right, bottom, left } = element.getBoundingClientRect();
    let scaleX = 1;
    let scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
        const { offsetWidth, offsetHeight } = element;
        scaleX = offsetWidth > 0 ? Math.round(width) / offsetWidth : 1;
        scaleY = offsetHeight > 0 ? Math.round(height) / offsetHeight : 1;
    }
    return {
        width: width / scaleX,
        height: height / scaleY,
        top: top / scaleY,
        right: right / scaleX,
        bottom: bottom / scaleY,
        left: left / scaleX,
        x: left / scaleX,
        y: top / scaleY,
    };
};
export default getBoundingClientRect;
//# sourceMappingURL=getBoundingClientRect.js.map