/**
 * A global namespace for 'transition' string.
 * @type {string}
 */
const transitionProperty = 'webkitTransition' in document.head.style ? 'webkitTransition' : 'transition';
export default transitionProperty;
