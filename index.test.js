const { add, subtract, multiply, divide } = require('./index.js');

test('1 + 2 to equal 3', () => {
  expect(add('one')('two').value).toBe(3);
  expect(add('one')('2').value).toBe(3);
  expect(add(1)('2').value).toBe(3);
});

test('1 - 4 to equal -3', () => {
  expect(subtract('one')('four').value).toBe(-3);
  expect(subtract('one')('4').value).toBe(-3);
  expect(subtract(1)('4').value).toBe(-3);
});

test('10 / 5 to equal 2', () => {
  expect(divide('ten')('five').value).toBe(2);
  expect(divide('ten')('5').value).toBe(2);
  expect(divide(10)('5').value).toBe(2);
  expect(divide(10)('5').value).toBe(2);
});

test('10 * 5 to equal 50', () => {
  expect(multiply('ten')('five').value).toBe(50);
  expect(multiply('ten')('5').value).toBe(50);
  expect(multiply(10)('5').value).toBe(50);
});

test('Operate on N numbers', () => {
  expect(multiply('ten')('five')('two')('four').value).toBe(400);
  expect(divide('ten')('five')('two')('four').value).toBe(0.25);
});

test('Allows negative numbers in the after the first arg', () => {
  expect(multiply('ten')('five')(-2)('four').value).toBe(-400);
  expect(divide('ten')('five')(-2)('four').value).toBe(-0.25);
});
