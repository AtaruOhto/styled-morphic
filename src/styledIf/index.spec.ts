import { expect } from 'chai';
import styledIf from './index';

const stylesIfPresent = 'display: block;';
const stylesIfNotPresent = 'display: none;';

describe(`styledIf`, () => {
  describe(`Positive`, () => {
    it('Returns presentedStyles when true', done => {
      expect(styledIf(true, stylesIfPresent, stylesIfNotPresent)).to.equal(
        stylesIfPresent,
      );
      done();
    });

    it('Returns notPresentedStyles when false', done => {
      expect(styledIf(false, stylesIfPresent, stylesIfNotPresent)).to.equal(
        stylesIfNotPresent,
      );
      done();
    });
  });

  describe(`Negative`, () => {
    it('Throw when stylesIfPresent is not string', done => {
      try {
        styledIf(true, {} as string, stylesIfNotPresent);
      } catch (e) {
        expect(e.toString()).to.have.string('styledIf');
        done();
      }
    });

    it('Throw when stylesIfNotPresent is not string', done => {
      try {
        styledIf(false, stylesIfPresent, [] as any);
      } catch (e) {
        expect(e.toString()).to.have.string('styledIf');
        done();
      }
    });
  });
});
