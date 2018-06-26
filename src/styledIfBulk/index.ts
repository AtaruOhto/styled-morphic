import _reduce from 'lodash/reduce';
import _isNil from 'lodash/isNil';

import styledIf from '../styledIf/index';

interface IIfStyles {
  check: string;
  true: string;
  false: string;
}

const validateStyles = (styles: IIfStyles) => {
  if (_isNil(styles.check) || _isNil(styles.true) || _isNil(styles.false)) {
    throw new Error(
      'passed bulkStyles is invalid. each bulkStyles must have the following properties: "check", "true", "false"',
    );
  }
  return true;
};

export default (props: any, bulkStyles: IIfStyles[]) =>
  _reduce(
    bulkStyles,
    (result, styles) => {
      validateStyles(styles);
      return result + styledIf(props[styles.check], styles.true, styles.false);
    },
    '',
  );
