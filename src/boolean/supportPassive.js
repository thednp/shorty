import {one} from '../event/one.js'

// determine support for passive events
export const supportPassive = (() => {
  // Test via a getter in the options object to see if the passive property is accessed
  let result = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        result = true;
      }
    });
    one(document, 'DOMContentLoaded', ()=>{}, opts);
  } catch (e) {}

  return result;
})();