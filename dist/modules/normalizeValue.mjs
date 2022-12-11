const normalizeValue = (value) => {
  if (["true", true].includes(value)) {
    return true;
  }
  if (["false", false].includes(value)) {
    return false;
  }
  if (["null", "", null, void 0].includes(value)) {
    return null;
  }
  if (value !== "" && !Number.isNaN(+value)) {
    return +value;
  }
  return value;
};

export { normalizeValue as default };
//# sourceMappingURL=normalizeValue.mjs.map
