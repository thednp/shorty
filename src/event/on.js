// attach handlers
export function on (element, event, handler, options) {
  options = options || false;
  element.addEventListener(event, handler, options);
}