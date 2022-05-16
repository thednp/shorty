import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationName' string.
 * @type {string}
 */
const animationName = 'webkitAnimation' in documentHead.style ? 'webkitAnimationName'
  : /* istanbul ignore next */'animationName';
export default animationName;
