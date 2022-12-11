'use strict';

const documentHead = require('./documentHead.cjs');

const supportAnimation = ["webkitAnimation", "animation"].some((p) => p in documentHead.style);

module.exports = supportAnimation;
//# sourceMappingURL=supportAnimation.cjs.map
