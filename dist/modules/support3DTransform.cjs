'use strict';

const documentHead = require('./documentHead.cjs');

const support3DTransform = ["webkitPerspective", "perspective"].some((p) => p in documentHead.style);

module.exports = support3DTransform;
//# sourceMappingURL=support3DTransform.cjs.map
