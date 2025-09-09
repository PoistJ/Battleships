const GameLogic = require("./GameLogic");

const gridOne = document.getElementsByClassName("gridOne")[0];
const gridTwo = document.getElementsByClassName("gridTwo")[0];

function displayBoard(board) {
  if (board.boardNum == 1) {
    gridDiv = gridOne;
  } else if (board.boardNum == 2) {
    gridDiv = gridTwo;
  }

  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(10,40px)";
  grid.style.gridTemplateRows = "repeat(10,40px)";
  grid.style.borderStyle = "solid";
  grid.style.borderWidth = "4px";
  grid.style.borderColor = "black";
  gridDiv.appendChild(grid);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      let x = i + 1;
      let y = j + 1;

      if (board.board[i][j] === 2) {
        div.style.backgroundColor = "red";
      } else if (board.board[i][j] == 1) {
        div.style.backgroundColor = "darkgrey";
      } else if (board.board[i][j].sunk == false) {
        div.style.backgroundColor = "blue";
      }
      div.style.borderStyle = "solid";
      div.style.borderColor = "black";
      div.className = `cell${i + 1}${j + 1}`;

      div.addEventListener("click", () => {
          if (board.boardNum == 1) {
    gridDiv = gridOne;
  } else if (board.boardNum == 2) {
    gridDiv = gridTwo;
  }
        board.receiveAttack(x, y);
        gridDiv.innerHTML = "";
        displayBoard(board);
      });
      grid.appendChild(div);
    }
  }
}

function clearBoard() {
  boardDiv.innerHTML = "";
}

function refreshBoard(board, gridDiv) {
  gridDiv.innerHTML = "";
  displayBoard(board, gridDiv);
}

module.exports = { displayBoard };
