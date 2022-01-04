import isHTMLElement from '../is/isHTMLElement';

/**
 * Returns the bounding client rect of a target `HTMLElement`.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {HTMLElement} element target
 * @param {boolean=} includeScale when *true*, the target scale is also computed
 * @returns {SHORTER.BoundingClientRect} the bounding client rect object
 */
export default function getBoundingClientRect(element, includeScale) {
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0
      ? Math.round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0
      ? Math.round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY,
  };
}
