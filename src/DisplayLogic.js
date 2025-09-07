const GameLogic = require("./GameLogic");

const main = document.getElementById("main");

function displayBoard(board) {
  const grid = document.createElement("div");
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(10,20px)";
  grid.style.gridTemplateRows = "repeat(10,20px)";
  grid.style.borderStyle = "solid";
  grid.style.borderWidth = "4px";
  grid.style.borderColor = "black";
  main.appendChild(grid);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");

      if (board[i][j] == 2) {
        div.style.backgroundColor = "red";
      } else if (board[i][j] == 1) {
        div.style.backgroundColor = "darkgrey";
      } else if (board[i][j].sunk == false) {
        div.style.backgroundColor = "blue";
      }
      grid.appendChild(div);
    }
  }
}

module.exports = displayBoard;