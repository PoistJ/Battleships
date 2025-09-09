require("./styles.css");
const GameLogic = require("./GameLogic");
const DisplayLogic = require("./DisplayLogic");

const gridOne = document.getElementsByClassName("gridOne")[0];
const gridTwo = document.getElementsByClassName("gridTwo")[0];

const boardOne = new GameLogic.Gameboard(1)
const playerOne = new GameLogic.Player(boardOne, 1)
const boardTwo = new GameLogic.Gameboard(2)
const playerTwo = new GameLogic.Player(boardTwo, 2)

boardOne.createBoard(10,10);
boardTwo.createBoard(10,10);

DisplayLogic.displayBoard(boardOne);
DisplayLogic.displayBoard(boardTwo);