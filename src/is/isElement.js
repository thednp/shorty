const isElement = (element) => (element && [1, 2, 3, 4, 5, 6, 7, 8].some((x) => element.nodeType === x)) || false;
export default isElement;
