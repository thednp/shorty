import getDocument from './getDocument.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const getElementById = (id, context) => {
  return getDocument(context).getElementById(id) || null;
};

export { getElementById as default };
//# sourceMappingURL=getElementById.mjs.map
