"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("lodash/reduce"));
const index_1 = __importDefault(require("../styledSwitch/index"));
exports.default = (props, bulkSwitch) => reduce_1.default(bulkSwitch, (result, switchObject) => result +
    index_1.default(props[switchObject.check], switchObject.switch, switchObject.default), '');
