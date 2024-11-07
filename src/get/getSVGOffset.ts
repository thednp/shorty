import isHTMLElement from "../is/isHTMLElement";
import getParentNode from "./getParentNode";

/**
 * Returns offset properties for `SVGElement` relative to first
 * parent `HTMLElement`.
 *
 * @param target the `<svg>` target element
 */
const getSVGOffset = (target: SVGElement) => {
  const majorBlockTags = ["HTML", "BODY"];
  let { parentNode } = target;

  /* istanbul ignore else @preserve */
  if (!isHTMLElement(parentNode)) {
    while (parentNode && !majorBlockTags.includes(parentNode.nodeName)) {
      parentNode = getParentNode(parentNode);
      /* istanbul ignore else @preserve */
      if (isHTMLElement(parentNode)) {
        break;
      }
    }
  }

  const {
    offsetLeft: parentOffsetLeft,
    offsetTop: parentOffsetTop,
    offsetParent,
  } = parentNode as HTMLElement;
  const { top: parentTop, left: parentLeft } = (parentNode as HTMLElement)
    .getBoundingClientRect();
  const { top, left, width, height } = target.getBoundingClientRect();

  const offsetTop = parentOffsetTop + (top - parentTop);
  const offsetLeft = parentOffsetLeft + (left - parentLeft);

  return {
    offsetTop,
    offsetLeft,
    offsetWidth: width,
    offsetHeight: height,
    offsetParent,
  };
};

export default getSVGOffset;
