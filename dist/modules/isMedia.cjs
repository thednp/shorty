'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isMedia = (element) => isNode(element) && ["SVG", "Image", "Video", "Canvas"].some((s) => element.constructor.name.includes(s)) || false;

module.exports = isMedia;
//# sourceMappingURL=isMedia.cjs.map
