import isElement from "../is/isElement.ts";
import isHTMLElement from "../is/isHTMLElement.ts";
import getElementStyle from "./getElementStyle.ts";
import getParentNode from "./getParentNode.ts";
import getWindow from "./getWindow.ts";
import getDocumentElement from "./getDocumentElement.ts";
import isTableElement from "../is/isTableElement.ts";
import isWebKit from "../boolean/isWebKit.ts";
import matches from "../selectors/matches.ts";
import getNodeName from "./getNodeName.ts";
import isNode from "../is/isNode.ts";

const isStaticPositioned = (element: Element) => {
  return getElementStyle(element, "position") === "static";
};

const isFixedPositioned = (element: Element) => {
  return getElementStyle(element, "position") === "fixed";
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
  /* istanbul ignore next @preserve */
  const css = isElement(elementOrCss)
    ? getComputedStyle(elementOrCss)
    : elementOrCss;

  /* istanbul ignore next @preserve */
  return (
    css.transform !== "none" ||
    css.perspective !== "none" ||
    /* istanbul ignore next @preserve */
    (css.containerType ? css.containerType !== "normal" : false) ||
    /* istanbul ignore next @preserve */
    (!webkit &&
      (css.backdropFilter ? css.backdropFilter !== "none" : false)) ||
    /* istanbul ignore next @preserve */
    (!webkit &&
      (css.filter ? css.filter !== "none" : false)) ||
    /* istanbul ignore next @preserve */
    ["transform", "perspective", "filter"].some((value) =>
      (css.willChange || "").includes(value)
    ) ||
    /* istanbul ignore next */
    ["paint", "layout", "strict", "content"].some((value) =>
      (css.contain || "").includes(value)
    )
  );
};

const getContainingBlock = (element: Element) => {
  let currentNode: Node | null = getParentNode(element);
  /* istanbul ignore next @preserve */
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
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

const getTrueOffsetParent = (element: Element) => {
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
