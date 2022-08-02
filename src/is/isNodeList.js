const isNodeList = (obj) => (obj && obj.constructor.name === "NodeList") || false;
export default isNodeList;
