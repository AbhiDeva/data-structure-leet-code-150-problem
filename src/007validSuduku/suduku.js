/**
 * You are given a 9×9 Sudoku board (partially filled with digits ‘1’–‘9’ and ‘.’).
* You need to determine if the board is valid, according to Sudoku rules:
* Each row must contain the digits 1–9 without repetition.
* Each column must contain the digits 1–9 without repetition.
* Each of the 3×3 sub-boxes must contain the digits 1–9 without repetition.
 */

/***
 * Example
 * const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

 */

/**
 *  Brute-Force Approach
 * For every filled cell (i, j):
 * Check if the same number appears again in the same row, same column, or same 3×3 subgrid.
 */

function isValidSudokuBruteForce(board) {
  const n = 9;

  // helper to check if number exists in row, col, or box
  const isValid = (row, col, num) => {
    // Check row
    for (let j = 0; j < n; j++) {
      if (j !== col && board[row][j] === num) return false;
    }

    // Check column
    for (let i = 0; i < n; i++) {
      if (i !== row && board[i][col] === num) return false;
    }

    // Check 3x3 box
    const boxRowStart = Math.floor(row / 3) * 3;
    const boxColStart = Math.floor(col / 3) * 3;

    for (let i = boxRowStart; i < boxRowStart + 3; i++) {
      for (let j = boxColStart; j < boxColStart + 3; j++) {
        if ((i !== row || j !== col) && board[i][j] === num) return false;
      }
    }

    return true;
  };

  // iterate each cell
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const num = board[i][j];
      if (num !== "." && !isValid(i, j, num)) {
        return false;
      }
    }
  }

  return true;
}


/**
 *  HashSet Approach (Efficient & Clean)
 *  Use 3 sets per iteration to track duplicates:
 *  rows[i] → Set of seen numbers in row i
 * cols[j] → Set of seen numbers in column j
 * boxes[k] → Set of seen numbers in 3×3 box k
 */

function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === ".") continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      rows[i].add(num);
      cols[j].add(num);
      boxes[boxIndex].add(num);
    }
  }

  return true;
}

/**
 * Bitmask Approach (Advanced)
 * Instead of Sets, use integers as bitmasks to track digits (1–9).
 * Each bit represents if a number was seen in that row/column/box.
 * This reduces memory and improves speed for large-scale validation.
 *
 */

function isValidSudokuBitmask(board) {
  const rows = Array(9).fill(0);
  const cols = Array(9).fill(0);
  const boxes = Array(9).fill(0);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;

      const val = 1 << (cell - 1);
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i] & val || cols[j] & val || boxes[boxIndex] & val) {
        return false;
      }

      rows[i] |= val;
      cols[j] |= val;
      boxes[boxIndex] |= val;
    }
  }

  return true;
}
