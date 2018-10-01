const { add, substract, multiply, divide } = require('./index.js');

test('1 + 2 to equal 3', () => {
	expect(add('one', 'two')).toBe(3);
	expect(add('one', '2')).toBe(3);
	expect(add(1, '2')).toBe(3);
});

test('1 - 4 to equal -3', () => {
	expect(substract('one', 'four')).toBe(-3);
	expect(substract('one', '4')).toBe(-3);
	expect(substract(1, '4')).toBe(-3);
});

test('10 / 5 to equal 2', () => {
	expect(divide('ten', 'five')).toBe(2);
	expect(divide('ten', '5')).toBe(2);
	expect(divide(10, '5')).toBe(2);
	expect(divide(10, '5')).toBe(2);
});

test('10 * 5 to equal 50', () => {
	expect(multiply('ten', 'five')).toBe(50);
	expect(multiply('ten', '5')).toBe(50);
	expect(multiply(10, '5')).toBe(50);
});

test('Operate on N numbers', () => {
	expect(multiply('ten', 'five', 'two', 'four')).toBe(400);
	expect(divide('ten', 'five', 'two', 'four')).toBe(0.25);
});
