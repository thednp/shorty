import getDocumentElement from "./getDocumentElement";
import isShadowRoot from "../is/isShadowRoot";
import isElement from "../is/isElement";
import isNode from "../is/isNode";

/**
 * Returns the `parentNode` also going through `ShadowRoot`.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param node the target node
 * @returns the apropriate parent node
 */
const getParentNode = (node: Node) => {
  if (node.nodeName === "HTML") {
    return node as HTMLElement;
  }

  // this is a quicker (but less type safe) way to save quite some bytes from the bundle
  return (
    (isElement(node) && node.assignedSlot) || // step into the shadow DOM of the parent of a slotted node
    (isNode(node) && node.parentNode) || // DOM Element detected
    (isShadowRoot(node) && node.host) || // ShadowRoot detected
    getDocumentElement(node) // fallback to <HTML>
  );
};

export default getParentNode;
