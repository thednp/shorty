/**
 * An accessor that checks for CSS3 animation support.
 */
const supportAnimation = () =>
  ["webkitAnimation", "animation"].some((p) => p in document.head.style);

export default supportAnimation;
