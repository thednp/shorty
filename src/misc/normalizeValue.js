const normalizeValue = (value) => {
    if (["true", true].includes(value)) {
        return true;
    }
    if (["false", false].includes(value)) {
        return false;
    }
    if (value === "" || value === "null") {
        return null;
    }
    if (value !== "" && !Number.isNaN(+value)) {
        return +value;
    }
    return value;
};
export default normalizeValue;
//# sourceMappingURL=normalizeValue.js.map