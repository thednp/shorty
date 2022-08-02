import isWindow from '../is/isWindow';
const getNodeScroll = (element) => {
    const isWin = isWindow(element);
    const x = isWin ? element.scrollX : element.scrollLeft;
    const y = isWin ? element.scrollY : element.scrollTop;
    return { x, y };
};
export default getNodeScroll;
