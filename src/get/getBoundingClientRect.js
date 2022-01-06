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
  const {
    width, height, top, right, bottom, left,
  } = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0
      ? Math.round(width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0
      ? Math.round(height) / element.offsetHeight || 1 : 1;
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
}
