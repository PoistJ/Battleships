const GameLogic = require("./GameLogic");
const DisplayLogic = require("./DisplayLogic");

const main = document.getElementById("main");

const btn = document.createElement("button");
btn.innerHTML = "New Board";
main.appendChild(btn);

btn.addEventListener("click", () => {
  const board = new GameLogic.Gameboard();
  DisplayLogic.displayBoard(board);
});