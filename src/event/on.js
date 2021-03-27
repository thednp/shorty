// attach handlers
export default function on(element, event, handler, options) {
  const ops = options || false;
  element.addEventListener(event, handler, ops);
}
