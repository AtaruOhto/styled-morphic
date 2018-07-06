import _reduce from 'lodash/reduce';
import styledIf from '../styledIf/index';

interface IIfStyles {
  check: string;
  true: string;
  false?: string;
}

export default (bulkStyles: IIfStyles[]) =>
  _reduce(
    bulkStyles,
    (result, styles) => {
      return styles.false
        ? result + styledIf(styles.check, styles.true, styles.false)
        : result + styledIf(styles.check, styles.true);
    },
    '',
  );
