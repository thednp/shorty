import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationDelay' string.
 * @type {string}
 */
const animationDelay = 'webkitAnimation' in documentHead.style ? 'webkitAnimationDelay'
  : /* istanbul ignore next */'animationDelay';
export default animationDelay;
