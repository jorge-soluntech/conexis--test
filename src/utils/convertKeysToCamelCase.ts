interface Data {
  [key: string]: any;
}

/**
 * Converts the keys of an object from snake_case to camelCase.
 *
 * @param data - Object with keys in snake_case format
 * @returns A new object with the keys converted to camelCase.
 */
const convertKeysToCamelCase = (data: Data): Data => {
  const dataParsed: Data = {};

  Object.keys(data).forEach((key) => {
    const camelCaseKey = key.replace(/([-_][a-z])/gi, ($1) =>
      $1.toUpperCase().replace('_', '')
    );
    dataParsed[camelCaseKey] = data[key];
  });

  return dataParsed;
};

export default convertKeysToCamelCase;
