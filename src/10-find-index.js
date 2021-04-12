/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const l = array.length;
  const n = Math.floor(l / 2);
  let i = n;
  do {
    if (array[i] === value) {
      break;
    } else if (array[i] > value) {
      i--;
    } else {
      i += Math.floor((l + i) / 2) - 1;
    }
  } while (i < l);
  return i;
}

module.exports = findIndex;
