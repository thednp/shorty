import isElement from "../is/isElement";
import isHTMLElement from "../is/isHTMLElement";
import getElementStyle from "./getElementStyle";
import getParentNode from "./getParentNode";
import getWindow from "./getWindow";
import getDocumentElement from "./getDocumentElement";
import isTableElement from "../is/isTableElement";
import isWebKit from "../boolean/isWebKit";
import matches from "../selectors/matches";
import getNodeName from "./getNodeName";
import isNode from "../is/isNode";

const isStaticPositioned = (element: Element) => {
  return getElementStyle(element as HTMLElement, "position") === "static";
};

const isFixedPositioned = (element: Element) => {
  return getElementStyle(element as HTMLElement, "position") === "fixed";
};

const isTopLayer = (element: Element) => {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return matches(element, selector);
    } catch (_) {
      return false;
    }
  });
};

const isContainingBlock = (
  elementOrCss: Element | CSSStyleDeclaration,
) => {
  const webkit = isWebKit();
  const css = isElement(elementOrCss)
    ? getComputedStyle(elementOrCss)
    : /* istanbul ignore next */ elementOrCss;

  return (
    css.transform !== "none" ||
    css.perspective !== "none" ||
    (css.containerType
      ? css.containerType !== "normal"
      : /* istanbul ignore next */ false) ||
    (!webkit &&
      (css.backdropFilter
        ? css.backdropFilter !== "none"
        : /* istanbul ignore next */ false)) ||
    (!webkit &&
      (css.filter
        ? css.filter !== "none"
        : /* istanbul ignore next */ false)) ||
    ["transform", "perspective", "filter"].some((value) =>
      (css.willChange || /* istanbul ignore next */ "").includes(value)
    ) ||
    ["paint", "layout", "strict", "content"].some((value) =>
      (css.contain || /* istanbul ignore next */ "").includes(value)
    )
  );
};

const getContainingBlock = (element: Element) => {
  let currentNode: Node | null = getParentNode(element);
  /* istanbul ignore next @preserve */
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }

    currentNode = getParentNode(currentNode);
  }

  return null;
};

const isLastTraversableNode = (node: Node): boolean => {
  return ["html", "body", "#document"].includes(getNodeName(node));
};

const getTrueOffsetParent = (element: HTMLElement) => {
  if (
    !isHTMLElement(element) ||
    isFixedPositioned(element)
  ) {
    return null;
  }

  let rawOffsetParent = element.offsetParent;

  /* istanbul ignore if @preserve - no idea how to test this either */
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }

  return rawOffsetParent;
};

/**
 * Returns the `offsetParent` for a given target.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element the target node
 * @returns the offset parent node
 */
const getOffsetParent = (element: Element) => {
  const win = getWindow(element);

  if (!isNode(element) || isTopLayer(element)) {
    return win;
  }

  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }

  let offsetParent = getTrueOffsetParent(element);

  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    isStaticPositioned(offsetParent)
  ) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  /* istanbul ignore else @preserve */
  if (
    offsetParent &&
    isLastTraversableNode(offsetParent) &&
    isStaticPositioned(offsetParent) &&
    !isContainingBlock(offsetParent)
  ) {
    return win;
  }

  return offsetParent || getContainingBlock(element) || win;
};

export default getOffsetParent;
