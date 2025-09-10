class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
    this.sunk = false;
  }

  isHit() {
    this.hit++;
  }

  isSunk() {
    if (this.hit == this.length) {
      this.sunk = true;
    }
  }
}

class Gameboard {
  constructor(boardNum) {
    this.board = [];
    this.sunkCount = 0
    this.boardNum = boardNum;
  }

  createBoard(rows, cols) {
    for (let i = 0; i < rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < cols; j++) {
        this.board[i][j] = 0;
      }
    }

    return this.board;
  }

  placeShip(startX, endX, startY, endY, size) {
    const ship = new Ship(size);

    for (let i = startX - 1; i <= endX - 1; i++) {
      for (let j = startY - 1; j <= endY - 1; j++) {
        this.board[i][j] = ship;
      }
    }
  }

  receiveAttack(x, y) {
    if (this.board[x - 1][y - 1] !== 0) {
      this.board[x - 1][y - 1].isHit();
      this.board[x - 1][y - 1].isSunk();

      if (this.board[x - 1][y - 1].sunk == true) {
        this.sunkCount++;
      }
      this.board[x - 1][y - 1] = 2;
    } else if (this.board[x - 1][y - 1] == 0) {
      this.board[x - 1][y - 1] = 1;
      console.log(`Missed! Coordinates: (${x},${y})`);
    }
  }
}

class Player {
  constructor(board, turn, nextTurn) {
    this.gameBoard = board;
    this.turn = turn;
    this.nextTurn = this.nextTurn;
  }
}


module.exports = {
  Ship,
  Gameboard,
  Player,
};
