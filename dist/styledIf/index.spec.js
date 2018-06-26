"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const index_1 = __importDefault(require("./index"));
const stylesIfPresent = 'display: block;';
const stylesIfNotPresent = 'display: none;';
describe(`styledIf`, () => {
    describe(`Positive`, () => {
        it('Returns presentedStyles when true', done => {
            chai_1.expect(index_1.default(true, stylesIfPresent, stylesIfNotPresent)).to.equal(stylesIfPresent);
            done();
        });
        it('Returns notPresentedStyles when false', done => {
            chai_1.expect(index_1.default(false, stylesIfPresent, stylesIfNotPresent)).to.equal(stylesIfNotPresent);
            done();
        });
    });
    describe(`Negative`, () => {
        it('Throw when stylesIfPresent is not string', done => {
            try {
                index_1.default(true, {}, stylesIfNotPresent);
            }
            catch (e) {
                chai_1.expect(e.toString()).to.have.string('styledIf');
                done();
            }
        });
        it('Throw when stylesIfNotPresent is not string', done => {
            try {
                index_1.default(false, stylesIfPresent, []);
            }
            catch (e) {
                chai_1.expect(e.toString()).to.have.string('styledIf');
                done();
            }
        });
    });
});
