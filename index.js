const t2n = require('text-to-number');

module.exports = {
	add: (...nums) => nums.reduce((acc, cur) => acc + t2n(cur)),
	substract: (...nums) => nums.reduce((acc, cur) => acc - t2n(cur)),
	multiply: (...nums) => nums.reduce((acc, cur) => acc * t2n(cur)),
	divide: (...nums) => nums.reduce((acc, cur) => acc / t2n(cur)),
};
