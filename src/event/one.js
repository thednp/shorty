import on from './on.js'
import off from './off.js'

// attach & detach handlers
export default function(element, event, handler, options) {
  on(element, event, function handlerWrapper(e){
    if (e.target === element) {
      handler(e);
      off(element, event, handlerWrapper, options);
    }
  }, options);
}