'use strict';

const getDocument = require('./getDocument.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const getElementById = (id, context) => {
  return getDocument(context).getElementById(id) || null;
};

module.exports = getElementById;
//# sourceMappingURL=getElementById.cjs.map
