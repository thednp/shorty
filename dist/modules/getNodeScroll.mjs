import isWindow from './isWindow.mjs';
import './isObject.mjs';

const getNodeScroll = (element) => {
  const isWin = isWindow(element);
  const x = isWin ? element.scrollX : element.scrollLeft;
  const y = isWin ? element.scrollY : element.scrollTop;
  return { x, y };
};

export { getNodeScroll as default };
//# sourceMappingURL=getNodeScroll.mjs.map
