"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const index_1 = __importDefault(require("../styledIf/index"));
exports.default = (bulkStyles) => reduce_1.default(bulkStyles, (result, styles) => {
    return styles.false
        ? result + index_1.default(styles.check, styles.true, styles.false)
        : result + index_1.default(styles.check, styles.true);
}, '');
