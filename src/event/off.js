// detach handlers
export function off (element, event, handler, options) {
  options = options || false;
  element.removeEventListener(event, handler, options);
}