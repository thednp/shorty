/**
 * A global namespace for 'animationDuration' string.
 * @type {string}
 */
const animationDuration = 'webkitAnimation' in document.head.style ? 'webkitAnimationDuration' : 'animationDuration';
export default animationDuration;
