const t2n = require('text-to-number');

module.exports = {
	add: (...nums) => nums.map(t2n).reduce((acc, cur) => acc + cur),
	substract: (...nums) => nums.map(t2n).reduce((acc, cur) => acc - cur),
	multiply: (...nums) => nums.map(t2n).reduce((acc, cur) => acc * cur),
	divide: (...nums) => nums.map(t2n).reduce((acc, cur) => acc / cur),
};
