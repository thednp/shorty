/**
 * A global namespace for CSS3 animation support.
 * @type {boolean}
 */
const supportAnimation = 'webkitAnimation' in document.head.style || 'animation' in document.head.style;
export default supportAnimation;
