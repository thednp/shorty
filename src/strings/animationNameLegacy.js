/**
 * A global namespace for 'animationName' string.
 * @type {string}
 */
const animationName = 'webkitAnimation' in document.head.style ? 'webkitAnimationName' : 'animationName';
export default animationName;
