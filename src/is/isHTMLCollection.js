const isHTMLCollection = (obj) => (obj && obj.constructor.name === "HTMLCollection") || false;
export default isHTMLCollection;
