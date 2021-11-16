/**
 * A global namespace for 'animationDelay' string.
 * @type {string}
 */
const animationDelay = 'webkitAnimation' in document.head.style ? 'webkitAnimationDelay' : 'animationDelay';
export default animationDelay;
