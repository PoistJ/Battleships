const Gameboard = require("./GameLogic");

it("creates board of 2 x 2 size", () => {
  const board = new Gameboard();
  board.createBoard(2, 2);

  expect(board.board).toEqual([
    [0, 0],
    [0, 0],
  ]);
});

describe("placeShip function", () => {
  const board = new Gameboard();
  board.createBoard(10, 10);
  board.placeShip(2, 7, 3, 3, 5);
  it("places 5 length ship at (2,3) location (startpoint)", () => {
    expect(board.board[1][2]).toHaveProperty("hit");
  });

  it("check endpoint of 5 length ship at (2,3)", () => {
    expect(board.board[6][2]).toHaveProperty("hit");
  });
});

describe("receiveAttack function", () => {
  const board = new Gameboard();
  board.createBoard(10, 10);
  board.placeShip(3, 6, 7, 7, 4);

  it("hits a ship", () => {
    board.receiveAttack(4, 7);

    expect(board.board[3][6]).toMatchObject({ hit: 1 });
  });

  it("misses", () => {
    board.receiveAttack(2, 2);

    expect(board.board[2][2]).toEqual(0);
  });
});

it("gameboard tracks misses", () => {
  const board = new Gameboard();
  board.createBoard(10, 10);
  board.receiveAttack(5, 5);

  expect(board.board[4][4]).toEqual(1);
});

describe("check sunken ships", () => {
  const board = new Gameboard();
  board.createBoard(10, 10);
  board.placeShip(3, 7, 7, 7, 5);
  board.placeShip(2, 6, 3, 3, 4);

  it("is ship sunk", () => {
    board.receiveAttack(3,7)
    board.receiveAttack(4,7)
    board.receiveAttack(5,7)
    board.receiveAttack(6,7)
    board.receiveAttack(7,7)
    expect(board.sunkCount).toEqual(1);
  });

  /*it("all ships are sunk", () => {
    board.placeShip(10, 10, 3, 5, 3);
    board.placeShip(1, 1, 4, 6, 3);
    board.placeShip(8, 9, 9, 9, 2);
    expect(board.sunkCount).toEqual(5);
  });*/
});
