"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("./index"));
const bulkStyles = [
    {
        check: 'display',
        true: 'display: none;',
        false: 'display: block;',
    },
    {
        check: 'padding',
        true: 'padding: 0px;',
        false: 'padding: 8px;',
    },
    {
        check: 'margin',
        true: 'margin: 24px;',
        false: 'margin: 0 12px;',
    },
];
const props = {
    display: true,
    margin: true,
};
describe(`styledIfBulk`, () => {
    describe(`Positive`, () => {
        it('Returns bulkedStyles when passed parameters', done => {
            const result = index_1.default(props, bulkStyles);
            chai_1.expect(result).to.have.string('display: none;');
            chai_1.expect(result).to.have.string('padding: 8px;');
            chai_1.expect(result).to.have.string('margin: 24px;');
            done();
        });
        it('Returns bulkedStyles when passed parameters', done => {
            const result = index_1.default(props, bulkStyles);
            chai_1.expect(result).to.have.string('display: none;');
            chai_1.expect(result).to.have.string('padding: 8px;');
            chai_1.expect(result).to.have.string('margin: 24px;');
            done();
        });
    });
    describe(`Negative`, () => {
        it('Throw when passed parameters lacks', done => {
            const wrongBulkStyles = [
                {
                    check: 'display',
                    true: 'display: none;',
                },
            ];
            try {
                index_1.default(props, wrongBulkStyles);
            }
            catch (e) {
                chai_1.expect(e.toString()).to.be.contains('invalid');
                done();
            }
        });
    });
});
