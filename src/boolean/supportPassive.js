import addEventListener from '../strings/addEventListener.js'
import removeEventListener from '../strings/removeEventListener.js'

export default (() => {
  let result = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        result = true;
      }
    });
    document[addEventListener]('DOMContentLoaded', function wrap(){
      document[removeEventListener]('DOMContentLoaded', wrap, opts)
    }, opts);
  } catch (e) {}

  return result;
})();