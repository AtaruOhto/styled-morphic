"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const isNil_1 = __importDefault(require("lodash/isNil"));
const index_1 = __importDefault(require("../styledIf/index"));
const validateStyles = (styles) => {
    if (isNil_1.default(styles.check) || isNil_1.default(styles.true) || isNil_1.default(styles.false)) {
        throw new Error('passed bulkStyles is invalid. each bulkStyles must have the following properties: "check", "true", "false"');
    }
    return true;
};
exports.default = (props, bulkStyles) => reduce_1.default(bulkStyles, (result, styles) => {
    validateStyles(styles);
    return result + index_1.default(props[styles.check], styles.true, styles.false);
}, '');
