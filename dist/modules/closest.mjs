const closest = (element, selector) => {
  return element ? element.closest(selector) || closest(element.getRootNode().host, selector) : null;
};

export { closest as default };
//# sourceMappingURL=closest.mjs.map
