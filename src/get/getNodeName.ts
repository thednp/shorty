import isNode from "../is/isNode";

/**
 * Returns the value of `node.nodeName` for the given node.
 * @param node target node
 * @returns the node name
 */
const getNodeName = (node: Node | Window) => {
  /* istanbul ignore else @preserve */
  if (isNode(node)) {
    return (node.nodeName || /* istanbul ignore next @preserve */ "")
      .toLowerCase();
  }
  /* istanbul ignore next @preserve */
  return "#document";
};

export default getNodeName;
