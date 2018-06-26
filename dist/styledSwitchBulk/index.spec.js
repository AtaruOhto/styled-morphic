"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("./index"));
const bulkSwitch = [
    {
        check: 'type',
        switch: {
            primary: 'background-color: blue;',
            danger: 'background-color: red;',
            disabled: 'background-color: gray;',
        },
        default: 'background-color: gray;',
    },
    {
        check: 'status',
        switch: {
            loading: 'display: none;',
            loaded: 'display: block;',
            suspended: 'display: none;',
        },
        default: '',
    },
];
const props = {
    type: 'disabled',
    status: 'loaded',
};
describe(`styledSwitchBulk`, () => {
    describe(`Positive`, () => {
        it('Returns bulkedStyles when passed parameters', done => {
            const result = index_1.default(props, bulkSwitch);
            chai_1.expect(result).to.be.contains('background-color: gray;');
            chai_1.expect(result).to.be.contains('display: block;');
            done();
        });
    });
});
