import isNode from "../is/isNode";

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
