const functionName = 'styledSwitch';
import { validateIsString } from '../utils/validator';

export default (
  switchKey: string,
  switchConditions: { [key: string]: string },
  defaultStyles: string,
) => {
  validateIsString(functionName, switchKey);
  const matchedStyles = switchConditions[switchKey];

  if (matchedStyles) {
    validateIsString(functionName, matchedStyles);
    return matchedStyles;
  }

  validateIsString(functionName, defaultStyles);
  return defaultStyles;
};
