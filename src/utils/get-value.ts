export default (obj: {[key: string]: any}, path: string, defaultValue: string = ''): any => {
  const keys = path.split('.');

  let result = obj;
  for (const key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }
  return result ?? defaultValue; 
};
