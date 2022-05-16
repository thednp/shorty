import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationDuration' string.
 * @type {string}
 */
const animationDuration = 'webkitAnimation' in documentHead.style ? 'webkitAnimationDuration'
  : /* istanbul ignore next */'animationDuration';
export default animationDuration;
