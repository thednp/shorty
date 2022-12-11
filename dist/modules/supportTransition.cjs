'use strict';

const documentHead = require('./documentHead.cjs');

const supportTransition = ["webkitTransition", "transition"].some((p) => p in documentHead.style);

module.exports = supportTransition;
//# sourceMappingURL=supportTransition.cjs.map
