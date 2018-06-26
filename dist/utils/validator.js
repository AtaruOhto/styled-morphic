"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIsString = (functionName, passedStyle) => {
    if (typeof passedStyle !== 'string') {
        throw new Error(`The value passed to ${functionName} is not string. Pass ${functionName} to string value.`);
    }
};
