const isWebKit = () => {
  /* istanbul ignore next @preserve - this case should be tested in Internet Exploder */
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
};

export default isWebKit;
