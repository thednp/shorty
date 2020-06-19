// detach handlers
export default function(element, event, handler, options) {
  options = options || false;
  element.removeEventListener(event, handler, options);
}