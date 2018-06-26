import _reduce from 'lodash/reduce';
import styledSwitch from '../styledSwitch/index';

interface ISwitch {
  check: string;
  switch: { [key: string]: string } | any;
  default: string;
}

export default (props: any, bulkSwitch: ISwitch[]) =>
  _reduce(
    bulkSwitch,
    (result, switchObject) =>
      result +
      styledSwitch(
        props[switchObject.check],
        switchObject.switch,
        switchObject.default,
      ),
    '',
  );
