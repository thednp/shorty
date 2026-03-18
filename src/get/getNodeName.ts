import isNode from "../is/isNode.ts";

/**
 * Returns the value of `node.nodeName` for the given node.
 * @param node target node
 * @returns the node name
 */
const getNodeName = (node: Node | Window) => {
  /* istanbul ignore else @preserve */
  if (isNode(node)) {
    /* istanbul ignore next @preserve */
    return (node.nodeName || "").toLowerCase();
  }
  /* istanbul ignore next @preserve */
  return "#document";
};

export default getNodeName;
