export declare function styledIf(
  valIsPresent: any,
  stylesIfPresent: string,
  stylesIfNotPresent?: string,
): string;

export declare function styledSwitch(
  switchKey: string,
  switchConditions: { [key: string]: string },
  defaultStyles: string,
): string;

export interface IBulkIfConditions {
  check: string;
  true: string;
  false: string;
}

export declare function styledIfBulk(bulkStyles: IBulkIfConditions[]): string;

export interface IBulkSwitchConditions {
  check: string;
  switch: { [key: string]: string } | any;
  default: string;
}

export declare function styledSwitchBulk(
  props: any,
  bulkSwitch: IBulkSwitchConditions[],
): string;
