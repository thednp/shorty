import isWindow from '../is/isWindow';
/**
 * Returns an `{x,y}` object with the target
 * `HTMLElement` / `Node` scroll position.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element target node / element
 * @returns the scroll tuple
 */
const getNodeScroll = (element) => {
    const isWin = isWindow(element);
    const x = isWin ? element.scrollX : element.scrollLeft;
    const y = isWin ? element.scrollY : element.scrollTop;
    return { x, y };
};
export default getNodeScroll;
//# sourceMappingURL=getNodeScroll.js.map