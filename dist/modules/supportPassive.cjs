'use strict';

const one = require('./one.cjs');
const noop = require('./noop.cjs');
require('./on.cjs');
require('./off.cjs');

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

module.exports = supportPassive;
//# sourceMappingURL=supportPassive.cjs.map
