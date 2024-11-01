/**
 * An accessor that checks for CSS3 transition support.
 */
const supportTransition = () =>
  ["webkitTransition", "transition"].some((p) => p in document.head.style);

export default supportTransition;
