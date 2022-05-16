import documentHead from '../blocks/documentHead';

/**
 * A global namespace for 'animationend' string.
 * @type {string}
 */
const animationEndEvent = 'webkitAnimation' in documentHead.style ? 'webkitAnimationEnd'
  : /* istanbul ignore next */'animationend';
export default animationEndEvent;
