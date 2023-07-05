/**
 * Returns an array of unique objects from the provided array based on a specified object key.
 * @template T - The type of objects in the array.
 * @param {T[]} array - The array of objects.
 * @param {keyof T} objectKey - The key used to determine uniqueness.
 * @returns {T[]} - An array of unique objects.
 */
export const getUniqueArrayObjects = <T>(
  array: T[],
  objectKey: keyof T
): T[] => {
  const uniqueObjects: T[] = [];

  array.forEach((item) => {
    const keyValue = item[objectKey];
    const isUnique = !uniqueObjects.some((obj) => obj[objectKey] === keyValue);

    if (isUnique) {
      uniqueObjects.push(item);
    }
  });

  return uniqueObjects;
};
