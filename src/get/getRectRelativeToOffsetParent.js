import isHTMLElement from '../is/isHTMLElement';
import isScaledElement from '../is/isScaledElement';
import getBoundingClientRect from './getBoundingClientRect';

/**
 * Returns the rect relative to an offset parent.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {HTMLElement} element target
 * @param {HTMLElement} offsetParent the container / offset parent
 * @param {{x: number, y: number}} scroll
 * @returns {Record<string, number>}
 */
export default function getRectRelativeToOffsetParent(element, offsetParent, scroll) {
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
}
