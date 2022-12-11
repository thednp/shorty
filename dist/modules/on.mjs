const on = (element, eventName, listener, options) => {
  const ops = options || false;
  element.addEventListener(eventName, listener, ops);
};

export { on as default };
//# sourceMappingURL=on.mjs.map
