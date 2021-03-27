// detach handlers
export default function off(element, event, handler, options) {
  const ops = options || false;
  element.removeEventListener(event, handler, ops);
}
