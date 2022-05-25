// board = [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   ["".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   ["".","6",".",".",".",".","2","8","."],
//   ["".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ];

// grids=[grids[0],grids[1],grids[2],
// grids[3],grids[4],grids[5],
// grids[6],grids[7],grids[8]]
// */



export default class Sudoku {
  constructor(Board) {
    this.Board = Board;
    this.rows = [];
    this.columns = [];
    this.boxes = [];

  }

  // boardTraverse(){
  //   for (let i = 0; i < 9; i++) {
  //     this.rows.push([]);
  //     this.columns.push([]);
  //     this.boxes.push([]);
  //   }
  //   for (let i = 0; i < this.Board.length; i++) { // ROW CO-ORDINATE
  //     for (let j = 0; j < this.Board.length; j++) { // COLUMN CO-ORDINATE

  //       let cell = Board[i][j]; // STORE CELL IN VARIABLE

  //       if (cell !== ".") { // IF CELL NOT EMPTY
  //         this.rows[i].push(cell); // ADD VALUE TO APPROPRIATE ROWS ARRAY
  //         this.columns[j].push(cell); // ADD VALUE TO APPROPRIATE COLUMNS ARRAY

  //         let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3); // GET SUB-GRID (BOX) INDEX

  //         this.boxes[boxIndex].push(cell); // ADD VALUE TO BOXES ARRAY

  //       }
  //     }
  //   }
  // }
  boardValidation(Board) {
    for (let i = 0; i < 9; i++) {
      this.rows.push([]);
      this.columns.push([]);
      this.boxes.push([]);
    }
    for (let i = 0; i < this.Board.length; i++) { 
      for (let j = 0; j < this.Board.length; j++) {

        let cell = Board[i][j];

        if (cell !== ".") {
          if (this.rows[i].includes(cell)) {
            return false
          } else {
            this.rows[i].push(cell);
          }
          if (this.columns[j].includes(cell)) {
            return false;
          } else {
            this.columns[j].push(cell);
          }
          let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

          if (this.boxes[boxIndex].includes(cell)) {
            return false;
          } else {
            this.boxes[boxIndex].push(cell);
          }
        }
      }
    }

    return true;

  }
}