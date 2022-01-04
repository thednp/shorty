import isTableElement from '../is/isTableElement';
import isHTMLElement from '../is/isHTMLElement';
import isFirefox from '../boolean/isFirefox';
import getElementStyle from './getElementStyle';
import getParentNode from './getParentNode';
import getWindow from './getWindow';

/**
 * @param {Node} element
 * @returns {boolean}
 */
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const {
    transform, perspective, contain, willChange, filter,
  // @ts-ignore
  } = getComputedStyle(element);
  // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return transform !== 'none'
    || perspective !== 'none'
    || contain === 'paint'
    || ['transform', 'perspective'].includes(willChange)
    || (isFirefox && willChange === 'filter')
    || (isFirefox && (filter ? filter !== 'none' : false));
}

/**
 * @param {Node} element
 * @returns {(Node | ParentNode)?}
 */
function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && !['HTML', 'BODY'].includes(currentNode.nodeName)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    // @ts-ignore
    currentNode = currentNode.parentNode;
  }

  return null;
}

/**
 * @param {HTMLElement} element
 * @returns {HTMLElement?}
 */
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getElementStyle(element, 'position') === 'fixed') {
    return null;
  }

  // @ts-ignore
  return element.offsetParent;
}

/**
 * Returns the best possible container for offsets computation.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {HTMLElement} element target element
 * @returns {HTMLElement | Window | Node} the best `Node` / `Element` match
 */
export default function getOffsetParent(element) {
  // eslint-disable-next-line no-restricted-globals
  const win = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent)
    && getElementStyle(offsetParent, 'position') === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent
    && (['HTML', 'BODY'].includes(offsetParent.tagName)
      && getElementStyle(offsetParent, 'position') === 'static'
        && !isContainingBlock(offsetParent))) {
    return win;
  }

  return offsetParent || getContainingBlock(element) || win;
}
