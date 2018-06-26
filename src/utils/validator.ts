export const validateIsString = (functionName: string, passedStyle: string) => {
  if (typeof passedStyle !== 'string') {
    throw new Error(
      `The value passed to ${functionName} is not string. Pass ${functionName} to string value.`,
    );
  }
};
