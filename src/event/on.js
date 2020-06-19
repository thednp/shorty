// attach handlers
export default function(element, event, handler, options) {
  options = options || false;
  element.addEventListener(event, handler, options);
}