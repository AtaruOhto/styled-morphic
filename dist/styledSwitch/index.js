"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functionName = 'styledSwitch';
const validator_1 = require("../utils/validator");
exports.default = (switchKey, switchConditions, defaultStyles) => {
    validator_1.validateIsString(functionName, switchKey);
    const matchedStyles = switchConditions[switchKey];
    if (matchedStyles) {
        validator_1.validateIsString(functionName, matchedStyles);
        return matchedStyles;
    }
    validator_1.validateIsString(functionName, defaultStyles);
    return defaultStyles;
};
