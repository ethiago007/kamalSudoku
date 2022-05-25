import Sudoku from './../src/js/sudoku.js';
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", "2", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", "1", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];





let sudoku;

beforeEach(() => {
  sudoku = new Sudoku(board);
});

describe('Sudoku', () => {
  test('should correctly check each row,coloumn and grid for duplicates.', () => {
    expect(sudoku.boardValidation(board)).toEqual(true);
  }); 
});