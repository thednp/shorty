const off = (element, eventName, listener, options) => {
  const ops = options || false;
  element.removeEventListener(eventName, listener, ops);
};

export { off as default };
//# sourceMappingURL=off.mjs.map
