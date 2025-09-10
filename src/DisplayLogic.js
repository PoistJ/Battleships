const logDiv = document.getElementsByClassName("logDiv")[0];
const gridOne = document.getElementsByClassName("gridOne")[0];
const gridTwo = document.getElementsByClassName("gridTwo")[0];

function displayBoard(boardOne, boardTwo, currentTurn) {
  if (currentTurn == 1) {
    gridDiv = gridOne;
    board = boardOne;
    nextTurn = 2;
  } else if (currentTurn == 2) {
    gridDiv = gridTwo;
    board = boardTwo;
    nextTurn = 1;
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
      }

      div.style.borderStyle = "solid";
      div.style.borderColor = "black";
      div.className = `cell${i + 1}${j + 1}`;

      div.addEventListener("click", () => {
        board.receiveAttack(x, y, currentTurn);
        board.checkBoardStatus(nextTurn);

        if (currentTurn == 1) {
          gridDiv = gridOne;
        } else if (currentTurn == 2) {
          gridDiv = gridTwo;
        }

        clearBoard(gridDiv);
        displayBoard(boardOne, boardTwo, nextTurn);
        hideBoard(board);
      });
      grid.appendChild(div);
    }
  }
}

function clearBoard() {
  gridOne.innerHTML = "";
  gridTwo.innerHTML = "";
}

function hideBoard(board) {
  const coverDiv = document.createElement("div");
  coverDiv.style.width = "408px";
  coverDiv.style.height = "408px";
  coverDiv.style.backgroundColor = "grey";

  if (board.boardNum == 2) {
    coverDiv.innerHTML = "It is Player Two's turn";
    gridOne.appendChild(coverDiv);
  } else if (board.boardNum == 1) {
    coverDiv.innerHTML = "It is Player One's turn";
    gridTwo.appendChild(coverDiv);
  }
}

function displayShipSunk(player, length) {
  const logItem = document.createElement("div");
  logItem.innerText = `Player ${player} has sunken a ship of length ${length}`;
  logDiv.appendChild(logItem);
}

function displayPlayerLoss(player, length) {
  const logItem = document.createElement("div");
  logItem.innerText = `Player ${player} has lost the game!`;
  logDiv.appendChild(logItem);
}

module.exports = {
  displayBoard,
  hideBoard,
  displayShipSunk,
  displayPlayerLoss,
};
