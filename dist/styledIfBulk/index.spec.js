"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("./index"));
const bulkStyles = (props) => [
    {
        check: props.display,
        true: `display: ${props.display};`,
        false: `display: none;`,
    },
    {
        check: props.padding,
        true: `padding: ${props.padding};`,
        false: 'padding: 8px;',
    },
    {
        check: props.margin,
        true: `margin: ${props.margin};`,
        false: 'margin: 0 12px;',
    },
];
const props = {
    display: 'block',
    margin: '24px',
};
describe(`styledIfBulk`, () => {
    describe(`Positive`, () => {
        it('Returns bulkedStyles when passed parameters', done => {
            const result = index_1.default(bulkStyles(props));
            chai_1.expect(result).to.have.string('display: block;');
            chai_1.expect(result).to.have.string('padding: 8px;');
            chai_1.expect(result).to.have.string('margin: 24px;');
            done();
        });
    });
});
