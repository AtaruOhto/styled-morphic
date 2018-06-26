import { validateIsString } from '../utils/validator';
const functionName = 'styledIf';

export default (
  valIsPresent: any,
  stylesIfPresent: string,
  stylesIfNotPresent?: string,
) => {
  if (valIsPresent) {
    validateIsString(functionName, stylesIfPresent);
    return stylesIfPresent;
  }

  if (stylesIfNotPresent) {
    validateIsString(functionName, stylesIfNotPresent);
    return stylesIfNotPresent;
  }

  return '';
};
