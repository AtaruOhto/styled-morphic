import { expect } from 'chai';
import styledSwitch from './index';

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
      expect(
        styledSwitch('primary', switchConditions, disabledStyles),
      ).to.equal(primaryStyles);
      done();
    });

    it('Returns disabledStyles when secondary', done => {
      expect(
        styledSwitch('secondary', switchConditions, disabledStyles),
      ).to.equal(secondaryStyles);
      done();
    });

    it('Returns defautlStyled when no match', done => {
      expect(styledSwitch('foobar', switchConditions, disabledStyles)).to.equal(
        disabledStyles,
      );
      done();
    });
  });
});
