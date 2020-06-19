// determine support for passive events
export default (() => {
  // Test via a getter in the options object to see if the passive property is accessed
  let result = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: function() {
        result = true;
      }
    });
    document.addEventListener('DOMContentLoaded', function wrap(){
      document.removeEventListener('DOMContentLoaded', wrap, opts)
    }, opts);
  } catch (e) {}

  return result;
})();