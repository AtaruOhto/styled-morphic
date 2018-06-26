import { expect } from 'chai';
import styledIfBulk from './index';

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
      const result = styledIfBulk(props, bulkStyles);
      expect(result).to.have.string('display: none;');
      expect(result).to.have.string('padding: 8px;');
      expect(result).to.have.string('margin: 24px;');
      done();
    });

    it('Returns bulkedStyles when passed parameters', done => {
      const result = styledIfBulk(props, bulkStyles);
      expect(result).to.have.string('display: none;');
      expect(result).to.have.string('padding: 8px;');
      expect(result).to.have.string('margin: 24px;');
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
        styledIfBulk(props, wrongBulkStyles as any);
      } catch (e) {
        expect(e.toString()).to.be.contains('invalid');
        done();
      }
    });
  });
});
