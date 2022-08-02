const isDocument = (obj) => (obj && obj.nodeType === 9) || false;
export default isDocument;
