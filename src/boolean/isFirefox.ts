/**
 * An accessor that checks for Gecko browsers. When writing this file,
 * Gecko was not supporting `userAgentData`.
 */
const isFirefox = () =>
  navigator?.userAgent?.includes("Firefox") ||
  /* istanbul ignore next @preserve */ false;

export default isFirefox;
