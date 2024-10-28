import DOMContentLoadedEvent from "../strings/DOMContentLoadedEvent";

/**
 * A global `boolean` for passive events support,
 * in general event options are not suited for scroll prevention.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
const supportPassive = () => {
  let result = false;
  try {
    const opts = Object.defineProperty({ once: true }, "passive", {
      get: () => {
        result = true;
        return result;
      },
    });
    // istanbul ignore next @preserve
    document.addEventListener(DOMContentLoadedEvent, () => {}, opts);
  } catch (_e) {
    // throw Error('Passive events are not supported');
  }

  return result;
};

export default supportPassive;
