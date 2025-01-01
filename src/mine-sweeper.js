const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < columns; j++) {
      result[i][j] = 0;
      for (let w = -1; w <= 1; w++) {
        for (let h = -1; h <= 1; h++) {
          const ni = i + w;
          const nj = j + h;

          if (
            ni >= 0 &&
            ni < rows &&
            nj >= 0 &&
            nj < columns &&
            !(w === 0 && h === 0)
          ) {
            result[i][j] += matrix[ni][nj] ? 1 : 0;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
