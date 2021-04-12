/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const k = n.toString().split('');
  k.indexOf(`${Math.min(...k)}`);
  k.splice(k.indexOf(`${Math.min(...k)}`), 1);
  return Number(k.join(''));
}

module.exports = deleteDigit;
