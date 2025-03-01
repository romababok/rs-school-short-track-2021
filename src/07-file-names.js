/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = names;
  const index = [];
  do {
    for (let i = 0; i < names.length; i++) {
      const k = result.filter((item) => (item === `${result[i]}`));
      if (k.length > 1) {
        index.push(i);
      }
    } if (index.length === 0) break;
    for (let j = 1; j < index.length; j++) {
      result[index[j]] += `(${j})`;
    }
    index.length = 0;
  } while (result !== Array.from(new Set(result)));
  return result;
}

module.exports = renameFiles;
