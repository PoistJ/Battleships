require("./styles.css");
const GameLogic = require("./GameLogic");
const DisplayLogic = require("./DisplayLogic");

const boardOne = new GameLogic.Gameboard(1);
const playerOne = new GameLogic.Player(boardOne, 1, 2);
const boardTwo = new GameLogic.Gameboard(2);
const playerTwo = new GameLogic.Player(boardTwo, 2, 1);

boardOne.createBoard(10, 10);
boardTwo.createBoard(10, 10);

boardOne.placeShip(3, 7, 1, 1, 5);
boardOne.placeShip(6, 6, 3, 6, 4);
boardOne.placeShip(2, 4, 5, 5, 3);
boardOne.placeShip(7, 9, 6, 6, 3);
boardOne.placeShip(4, 4, 7, 8, 2);

boardTwo.placeShip(8, 8, 4, 8, 5);
boardTwo.placeShip(3, 3, 3, 6, 4);
boardTwo.placeShip(6, 8, 2, 2, 3);
boardTwo.placeShip(4, 6, 6, 6, 3);
boardTwo.placeShip(2, 3, 2, 2, 2);

DisplayLogic.displayBoard(boardOne, boardTwo, 1);
DisplayLogic.hideBoard(boardOne);
