'use strict';

const documentHead = require('./documentHead.cjs');

const supportTransform = ["webkitTransform", "transform"].some((p) => p in documentHead.style);

module.exports = supportTransform;
//# sourceMappingURL=supportTransform.cjs.map
