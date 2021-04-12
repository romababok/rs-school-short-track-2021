/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = [];
  const arr1 = [...s1];
  const arr2 = [...s2];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr1[i]);
        console.log(arr);
        delete arr1[i];
        console.log(arr1);
        delete arr2[j];
        console.log(arr2);
      }
    }
  }
  const result = arr.join('');

  return result.length;
}

module.exports = getCommonCharacterCount;
