'use strict';

const Data = require('./Data.cjs');
require('./isHTMLElement.cjs');
require('./isNode.cjs');
require('./isObject.cjs');

const getInstance = (target, component) => Data.get(target, component);

module.exports = getInstance;
//# sourceMappingURL=getInstance.cjs.map
