/**
 * Sort function for a data table.
 *
 * @param {any} parameterA - First comparison parameter.
 * @param {any} parameterB - Second comparison parameter.
 * @param {string} location - The location of the attribute to use for the comparison.
 * @param {string | null | undefined} sortOrder - The sort order can be 'ascend' or 'descend'.
 * @returns {number} A number representing the result of the comparison.
 */
const sorterTable = (
  parameterA: any,
  parameterB: any,
  location: string,
  sortOrder: string | null | undefined
): number => {
  const attrA = parameterA[`${location}`]?.trim() || '';
  const attrB = parameterB[`${location}`]?.trim() || '';
  if (!attrA && !attrB) return 0;
  if (!attrA) return sortOrder === 'ascend' ? 1 : -1;
  if (!attrB) return sortOrder === 'ascend' ? -1 : 1;
  return attrA.localeCompare(attrB, undefined, { numeric: true });
};

export default sorterTable;
