const add = (num1, num2) => num1 + num2

// RULES:
// 1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
// 2. Any live cell with two or three live neighbors lives on to the next generation.
// 3. Any live cell with more than three live neighbors dies, as if by overpopulation.
// 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// define neighbors
// define what defines 'alive'
// apply rule to determine target cell life/death

const board = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 0]
]

// let 0 = dead
// let 1 = alive

// Test that board array is a grid
// Select coordinates for start cell - declare start cell
// Determine what start cell's neighbors are.

module.exports = {
  board,
  add
}
