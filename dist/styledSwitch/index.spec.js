"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("./index"));
const primaryStyles = `
  background-color: blue;
  color: #FFF;
`;
const secondaryStyles = `
  background-color: blue;
  color: #FFF;
`;
const disabledStyles = `
  background-color: gray;
  color:  #000;
`;
const switchConditions = {
    primary: primaryStyles,
    secondary: secondaryStyles,
    disabled: disabledStyles,
};
describe(`styledIf`, () => {
    describe(`Positive`, () => {
        it('Returns primaryStyles when primary', done => {
            chai_1.expect(index_1.default('primary', switchConditions, disabledStyles)).to.equal(primaryStyles);
            done();
        });
        it('Returns disabledStyles when secondary', done => {
            chai_1.expect(index_1.default('secondary', switchConditions, disabledStyles)).to.equal(secondaryStyles);
            done();
        });
        it('Returns defautlStyled when no match', done => {
            chai_1.expect(index_1.default('foobar', switchConditions, disabledStyles)).to.equal(disabledStyles);
            done();
        });
    });
});
