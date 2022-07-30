import getDocument from "../get/getDocument";
const getElementById = (id, context) => {
    return getDocument(context).getElementById(id) || null;
};
export default getElementById;
//# sourceMappingURL=getElementById.js.map