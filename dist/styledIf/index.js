"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("../utils/validator");
const functionName = 'styledIf';
exports.default = (valIsPresent, stylesIfPresent, stylesIfNotPresent) => {
    if (valIsPresent) {
        validator_1.validateIsString(functionName, stylesIfPresent);
        return stylesIfPresent;
    }
    if (stylesIfNotPresent) {
        validator_1.validateIsString(functionName, stylesIfNotPresent);
        return stylesIfNotPresent;
    }
    return '';
};
