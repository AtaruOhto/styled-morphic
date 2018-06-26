import { expect } from 'chai';
import styledSwitchBulk from './index';

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
      const result = styledSwitchBulk(props, bulkSwitch);
      expect(result).to.be.contains('background-color: gray;');
      expect(result).to.be.contains('display: block;');
      done();
    });
  });
});
