import { expect } from 'chai';
import styledIfBulk from './index';

const bulkStyles = (props: any) => [
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
      const result = styledIfBulk(bulkStyles(props));
      expect(result).to.have.string('display: block;');
      expect(result).to.have.string('padding: 8px;');
      expect(result).to.have.string('margin: 24px;');
      done();
    });
  });
});
