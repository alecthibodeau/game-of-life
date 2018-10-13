const assert = require('assert');
const index = require('./index')

// it('should return true', () => {
//   assert.equal(index.add(1, 1), 2);
// });

// Test that board is an array
it('board is an array', () => {
  assert.equal(index.board instanceof Array, true);
});

// Test that each element is an array
it('each element in board is an array', () => {
  for (let i = 0; i < index.board.length; i++) {
    assert.equal(index.board[i] instanceof Array, true);
  }
});

// Test that each element is an array
it('board length equals each element length. (board is a square.)', () => {
  for (let i = 0; i < index.board.length; i++) {
    assert.equal(index.board.length, index.board[i].length);
  }
});

// Test that the only values in each board element are 0 or 1
// NOTE: This isn't working yet, because we need to determine how to test for 1 or 2 in 'set' 
it('only 0 or 1 in array', () => {
  let set
  for (let i = 0; i < index.board.length; i++) {
    set = new Set(index.board[i])
    (assert.equal(set.size, 1)) || (assert.equal(set.size, 2))
  }
});
