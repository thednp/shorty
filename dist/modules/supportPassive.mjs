import one from './one.mjs';
import noop from './noop.mjs';
import './on.mjs';
import './off.mjs';

const DOMContentLoadedEvent = "DOMContentLoaded";

const supportPassive = (() => {
  let result = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: () => {
        result = true;
        return result;
      }
    });
    one(document, DOMContentLoadedEvent, noop, opts);
  } catch (e) {
  }
  return result;
})();

export { supportPassive as default };
//# sourceMappingURL=supportPassive.mjs.map
